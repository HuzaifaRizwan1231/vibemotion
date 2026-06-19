import Navbar from '../components/MindItGames/Navbar.tsx'
import Hero from '../components/MindItGames/Hero.tsx'
import GamesSection from '../components/MindItGames/GamesSection.tsx'
import AboutSection from '../components/MindItGames/AboutSection.tsx'
import WhyMindItSection from '../components/MindItGames/WhyMindItSection.tsx'
import ContactSection from '../components/MindItGames/ContactSection.tsx'
import Footer from '../components/MindItGames/Footer.tsx'

const Home = () => {
  return (
    <div className="min-h-screen bg-brand-ink">
      <Navbar />
      <Hero />
      <GamesSection />
      <AboutSection />
      <WhyMindItSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
