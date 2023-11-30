import Categories from './Categories/Categories'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import Arrivals from "./Arrivals/Arrivals"
import BestSeller from './BestSeller/BestSeller'
import Services from './Services/Services'
import './Home.css'

function Home() {
  return <>
    <Hero />
    <Categories />
    <Arrivals />
    <BestSeller />
    <Services />
    <Contact />
  </>
}export default Home
