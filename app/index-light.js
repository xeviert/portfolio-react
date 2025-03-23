import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import CustomerLight from "../src/components/CustomerLight";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Layout from "../src/layouts/Layout";

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <Layout>
      <Home />
      <About />
      <Portfolio />
      <Services />
      <CustomerLight />
      <News />
      <Contact />
    </Layout>
  );
};

export default Index;
