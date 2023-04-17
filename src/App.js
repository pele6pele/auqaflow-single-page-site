import './App.css'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="footer_f">
        <ContactForm />
        <Footer />
      </div>
      <div className="footer_line">
        <p>© 2023 Aquaflow. Terms & Privacy</p>
      </div>
    </>
  )
}

export default App
