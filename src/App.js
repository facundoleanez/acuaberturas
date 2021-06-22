
import { Brand } from './components/Brand';
import { MainCarousel } from './components/MainCarousel';
import  { NavegationBar }  from './components/NavegationBar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Brand />
      <NavegationBar/>
      <MainCarousel/>

    </div>
  );
}

export default App;
