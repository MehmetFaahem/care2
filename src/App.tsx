import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { ContactForm } from './components/ContactForm'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
