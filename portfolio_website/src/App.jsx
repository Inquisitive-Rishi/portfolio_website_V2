import './App.css'
import Hero from "./components/Hero"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Navbar from "../src/components/Navbar"


function App() {

  return (
    <div className=" text-white relative">
      <Navbar/>
      <Hero/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
