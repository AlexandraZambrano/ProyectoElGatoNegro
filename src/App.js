import './App.css';
import './hojas-de-estilo/Boton.css';
import Hero from './componentes/Hero';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className='App'>
      <div className='Hero'>
        <Hero />
      </div>

      <p> hola</p>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
