
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import { Footer } from './components/Footer.js';
import { Nosotros } from './components/Nosotros';
import { ProductCatNav } from './components/ProductCatNav';
import { Header } from './components/Header';
import './App.css';
import { NavegationBar } from './components/NavegationBar';
import { NewNav } from './components/NewNav';


function App() {
  return (
    <div className="App">
      <Brand />
      <Header />

      <hr/>

      <MainCarousel/>
      <Nosotros/>
      <ProductCatNav/>
      
      <Footer/>
    </div>
  );
}

export default App;
