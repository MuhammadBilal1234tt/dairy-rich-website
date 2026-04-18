import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Benefits from '@/components/Benefits'
import Gallery from '@/components/Gallery'
import Coverage from '@/components/Coverage'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingButton from '@/components/FloatingButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Gallery />
      <Coverage />
      <Contact />
      <Footer />
      <FloatingButton />
    </main>
  )
}
