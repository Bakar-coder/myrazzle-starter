import React, { Fragment } from "react";
import { StaticRouter } from "react-router-dom";
import Routes from "./Routes";
import { renderRoutes } from "react-router-config";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export default (req, store, context) => {
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.url}>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
    <!doctype html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
       <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
       <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
       <link href="favicon.png" rel="icon" type="image/png">
      ${
        assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ""
      }
      ${
        process.env.NODE_ENV === "production"
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
      }
      
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${markup}</div>
      ${
        process.env.NODE_ENV === "production"
          ? `<script src="${assets.framework.js}" defer crossorigin></script>`
          : ""
      }
    </body>
    </html>`;
};
