import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PortfolioBlock from "./components/PortfolioBlock";
import Layout from "./layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Home />
      {/* <PortfolioBlock /> */}
      <About />
      <Contact />
    </Layout>
  );
};

export default Index;
