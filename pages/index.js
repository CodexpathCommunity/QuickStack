import Head from "next/head";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Hero from "../components/Hero";
import NavLink from "../components/NavLink/Index";
import Card from "../components/Card";
import { db } from "../firebase";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>QuiskStack</title>
        <link rel="icon" href="/images/logos.png" />
      </Head>

      <Hero />
      <NavLink />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-xl w-full p-4 m-auto mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
