import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ContactForm } from './components/ContactForm'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
