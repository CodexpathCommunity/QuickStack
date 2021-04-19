import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Hero from "../components/Hero";
import Contents from "../components/Contents/Index";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const links = [
    "courses",
    "Road-Map",
    "Resourses",
    "Design Trends",
    "Jobs",
    "Pricing",
  ];
  return (
    <div className="">
      <Head>
        <title>QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <Header showNav={showNav} setShowNav={setShowNav} links={links} />
      <SideNav showNav={showNav} setShowNav={setShowNav} links={links} />
      <Hero />
      <Contents />
      <Hero />
    </div>
  );
}
