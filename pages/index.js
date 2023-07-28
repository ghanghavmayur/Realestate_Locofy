import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import PropertiesGridCard  from "../components/properties-grid-card";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
  <>
  <Head>
    <title>Real Estate</title>
    <meta name="description"
    content="Discover your perfect home" />
  </Head>
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start">
      <Header hamburger showHamburgerMenuIcon={false} />
      <Hero />
      <AreaContainer />
      <FeatureContainer />
      <PropertiesGridCard/>
      <RentPropertiesForm />
      <Contact />
      <Footer/>
    </div>
    </>
  );
};

export default LandingPage;
