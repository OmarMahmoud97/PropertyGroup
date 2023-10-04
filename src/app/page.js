import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import LandingServices from "./components/landingServices.jsx";
import Testamonials from "./components/testamonials.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <About />
      <LandingServices />
      <Testamonials />
    </main>
  );
}
