import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Cursor from "./Cursor";
import Footer from "./Footer";

const Layout = ({ children }) => {

  return (
    <Fragment>
      <Head>
        <title>Xevier T. | Blog</title>
      </Head>
      <div className="resumo_fn_wrapper">
        <div className="resumo_fn_content">
          <div className="resumo_fn_page">
            {children}
          </div>
          <Footer />
        </div>
      </div>
      <Cursor />
    </Fragment>
  );
};

export default Layout;
