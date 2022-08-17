import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Customers from "../src/components/Customers";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      {/* <Portfolio /> */}
      {/* <Services /> */}
      {/* <Customers /> */}
      <News />
      <Contact />
    </Layout>
  );
};

export default Index;
