import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home.jsx';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/Portfolio';
import Stack from './components/stack/Stack';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Nav />
      <div className="App">
      <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/stack' element={<Stack />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/footer' element={<Footer />} />
    </Routes>
    <Footer />
    </div>
    </>
    
    
  );
}

export default App;
