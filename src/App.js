
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import { Footer } from './components/Footer.js';
import { ProductCatNav } from './components/ProductCatNav';
import { Header } from './components/Header';
import './App.css';
import { Contact } from './components/Contact';
import { FixedBg } from './components/FixedBg';


function App() {
  return (
    <div className="App">
      <Brand />

      <Header />
      <hr/>
      <ProductCatNav/>
      <hr/>
      <FixedBg/>
      <hr/>
      <MainCarousel/>
      <hr/>
      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
