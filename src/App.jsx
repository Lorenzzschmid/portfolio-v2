import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home.jsx';
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <Portfolio />
      <Contact />      
    </div>
  );
}

export default App;
