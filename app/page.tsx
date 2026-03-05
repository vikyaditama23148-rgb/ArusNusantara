import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import PreviewModules from "./components/PreviewModules"
import LobbyGameSection from "./components/LobbyGameSection"
import PlayerStatus from "./components/PlayerStatus"
import DailyChallenge from "./components/DailyChallenge"
import NusantaraBackground from "./components/NusantaraBackground"
import UserSession from "./components/UserSession"
import FeedbackSection from "./components/FeedbackSection"
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <div className="relative">

      <NusantaraBackground />

      <Navbar />

      {/* Status Login User */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <UserSession />
      </div>

      <Hero />

      <PlayerStatus />

      <LobbyGameSection />

      <DailyChallenge />

      <Features />

      <PreviewModules />

      <FeedbackSection />

      <Footer />

    </div>
  )
}