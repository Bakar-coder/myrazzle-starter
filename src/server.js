import express from "express";
import renderer from "./renderer";
import path from "path";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import createStore from "./store/serverStore";
import Routes from "./Routes";

const server = express();

const publicFolder =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "../build/public")
    : "public";

server
  .disable("x-powered-by")
  .use(express.static(publicFolder))
  .use("/api", proxy("http://localhost:5000"))
  .get("/*", (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
      .map(({ route }) =>
        route.getInitialProps ? route.getInitialProps(store) : null
      )
      .map((promise) =>
        promise
          ? new Promise((resolve, reject) =>
              promise.then(resolve).catch(resolve)
            )
          : null
      );

    Promise.all(promises)
      .then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) return res.redirect(301, context.url);
        if (context.notFound) res.status(404);
        res.status(200).send(content);
      })
      .catch((ex) => console.error(ex));
  });

export default server;
