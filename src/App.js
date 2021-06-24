
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import  { NavegationBar }  from './components/NavegationBar.js';
import { Footer } from './components/Footer.js';
import './App.css';
import { Nosotros } from './components/Nosotros';

function App() {
  return (
    <div className="App">
      <Brand />
      <NavegationBar/>
      <MainCarousel/>
      <Nosotros />
      <Footer/>
    </div>
  );
}

export default App;
