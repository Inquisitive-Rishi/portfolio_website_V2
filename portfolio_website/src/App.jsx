import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Container from "./components/Container"
import Footer from "./components/Footer"


function App() {

  return (
    <div className=" text-white ">
      <Navbar/>
      <Hero/>
      <Container/>
      <Footer/>
    </div>
  )
}

export default App
