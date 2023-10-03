"use client";
import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import LandingServices from "./components/landingServices.jsx";
import Translate from "./utils/translate.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <About />
      <LandingServices />
    </main>
  );
}
