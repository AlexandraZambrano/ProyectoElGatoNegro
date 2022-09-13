import './App.css';
import Navbar from './componentes/Navbar';
import Galeria from './componentes/Galeria'
import Card from './componentes/Card';
import Popular from './componentes/Popular';

function App() {
  return (
    <div className="App">
      <div className='tragos'>
        <Navbar />
      </div>
    <Popular />
    <Card />
    <Galeria />
    </div>
  );
}

export default App;
