import About from "./components/about.jsx";
import Hero from "./components/hero.jsx";
import LandingServices from "./components/landingServices.jsx";
import Testimonials from "./components/testimonials.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Hero />
      <About />
      <LandingServices />
      <Testimonials />
    </main>
  );
}
