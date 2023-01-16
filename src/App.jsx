import './App.scss';
import About from './components/about/About';
import Home from './components/home/Home.jsx';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
    </div>
  );
}

export default App;
