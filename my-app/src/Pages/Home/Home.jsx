import Categories from './Categories/Categories'
import Contact from './Contact/Contact'
import Hero from './Hero/Hero'
import Arrivals from "./Arrivals/Arrivals"
import './Home.css'
import BestSeller from './BestSeller/BestSeller'

function Home() {
  return <>
    <Hero />
    <Categories />
    <Arrivals />
    <BestSeller />
    <Contact />
  </>
}export default Home
