
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import { NavegationBar } from './components/NavegationBar.js';
import { Footer } from './components/Footer.js';
import { Nosotros } from './components/Nosotros';
import { ProductCatNav } from './components/ProductCatNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Brand />
      <NavegationBar/>
      <MainCarousel/>
      <Nosotros />

      <ProductCatNav />
      <Footer/>

    </div>
  );
}

export default App;
