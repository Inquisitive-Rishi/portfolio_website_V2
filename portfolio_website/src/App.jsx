import './App.css'
import Footer from "./components/Footer"
import Navbar from "../src/components/Navbar"
import Homepage from './components/Homepage'


function App() {

  return (
    <div className=" text-white relative">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}

export default App
