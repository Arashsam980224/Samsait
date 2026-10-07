import { useState } from 'react'
import Hero from './components/Hero'
import Education from './components/Education'
import Fun from './components/Fun'
import Management from './components/Management'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="fun">
          <Fun />
        </section>
        
        <section id="management">
          <Management />
        </section>
        
        <section id="shop">
          <Shop />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
