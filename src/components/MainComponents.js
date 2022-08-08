import React, { Fragment } from "react";
import { Comminuty } from "./pages/Comminuty";
import Design from "./pages/Design";
import Download from "./pages/Download";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Photoapp from "./pages/Photoapp";
import Subscription from "./pages/Subscription";

const MainComponents = () => {
  return (
    <Fragment>
      <Header />
      <Photoapp />
      <Design />
      <Comminuty />
      <Subscription />
      <Download />
      <Footer />
    </Fragment>
  );
};

export default MainComponents;
