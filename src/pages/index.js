import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";
import Hero from "../components/Home/Hero";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Head
          title="Computer Accessories and Peripherals - Phoenix Tech"
          description="Shop for computer accessories and peripherals to take your computer experience to the next level."
          // url=""
        />
        <Hero />
        {/* TopBrands */}
        {/* Info */}
      </Layout>
    </>
  );
};

export default HomePage;
