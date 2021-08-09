
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import { Footer } from './components/Footer.js';
import { ProductCatNav } from './components/ProductCatNav';
import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { FixedBg } from './components/FixedBg';
import { Services } from './components/Services';
import './App.css';
import { Logos } from './components/Logos';


function App() {
  return (
    <div className="App">
      <Brand />
      <Header />
      <Services/>
      <ProductCatNav/>
      
      <FixedBg/>
      <MainCarousel/>
      <Logos/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
