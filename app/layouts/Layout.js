"use client"
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PanelContent from "../components/PanelContent";
import { aTagClick, customCursor, dataImage, sticky } from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import Triggger from "./Triggger";

const Layout = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dataImage();
    customCursor();
    aTagClick();
    window.addEventListener("scroll", sticky);
  });
  const triggerMenu = () => {
    setTrigger(!trigger);
    document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
  };
  return (
    <Fragment>
      <Head>
        <title>Xevier T. | Personal Portfolio</title>
      </Head>
      <div className="resumo_fn_wrapper">
        {/* <Modalbox /> */}
        <div className="resumo_fn_content">
          <div className="resumo_fn_left">
            <div className="resumo_fn_page">{children}</div>
            <Footer />
          </div>

          <div className="resumo_fn_right">
            <Triggger open={() => triggerMenu()} />
            <PanelContent />
          </div>
        </div>
        <Nav close={() => triggerMenu()} trigger={trigger} />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Layout;
