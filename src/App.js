import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Hero from './component/hero';
import SectionTwo from './component/sectionTwo';
import SectionTree from './component/sectionTree';
import Card from './component/card';
import Footer from './component/footer';


export default function App() {
  return (
      <div className=''>
        <Navbar ></Navbar>
        <Hero />
        <SectionTwo />
        <SectionTree />
        <Card />
        <Footer />
      </div>
  )
}