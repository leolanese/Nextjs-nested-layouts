import App from 'next/app';
import React from 'react';
import DefaultLayout from '../components/layouts/default';
import MainLayout from '../components/layouts/main';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    );
  }
}

export default MyApp;
