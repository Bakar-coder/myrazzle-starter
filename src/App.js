import React from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import "./App.css";
import Layout from "./components/layouts/layout";
import { Helmet } from "react-helmet";

const App = ({ route }) => {
  return (
    <Layout>
      <Helmet>
        <meta name='description' content='Lorem ipsum' />
        <meta
          name='robots'
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <link rel='canonical' href='https://yourapp.com' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Your App | Config' />
        <meta property='og:description' content='Lorem Ipsum' />
        <meta property='og:url' content='https://yourapp.com' />
        <meta property='og:site_name' content='Your App' />
        <meta property='og:image' content='yourimage.jpg' />
        <meta property='og:image:secure_url' content='yourimage.jpg' />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content='Lorem ipsum' />
        <meta name='twitter:title' content='My app | Config' />
        <meta name='twitter:image' content='yourimage.png' />
      </Helmet>
      {renderRoutes(route.routes)}
    </Layout>
  );
};

export default { component: connect(null, null)(App) };
