import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/MainNavbar";
import Header from "@/components/Main/Header";
import Marq from "@/components/Main/Marq";
import Intro from "@/components/Main/Intro";
import Clients from "@/components/Main/Clients";
import Services from "@/components/Main/Services";
import Portfolio from "@/components/Main/Portfolio";
import CallToAction from "@/components/Main/Contact";
import Footer from "@/components/Main/Footer";

function HomeDark() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Elephant Group</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg position-re">
        <Header/>
        <Marq />
        <Intro />
        <Services />
        <Portfolio />
        <Clients />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

HomeDark.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeDark;
