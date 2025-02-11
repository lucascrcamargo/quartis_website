import Header from "./components/Header"
import Hero from "./components/Hero"
import BrazilLaunch from "./components/BrazilLaunch"
import Loyalty from "./components/Loyalty"
import RTPAdoption from "./components/RTPAdoption"
import Benefits from "./components/Benefits"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1B1C1D] text-white">
      <Header />
      <Hero />
      <BrazilLaunch />
      <Loyalty />
      <RTPAdoption />
      <Benefits />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  )
}

