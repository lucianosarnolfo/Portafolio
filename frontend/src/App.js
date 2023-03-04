
import './App.css';
import './components/BarraDeNavegacion';
import BarraDeNavegacion from './components/BarraDeNavegacion';
import Curriculum from './components/Curriculum';
import FondoGradiente from './components/FondoGradiente';
import BackgroundBurbujas from './components/BackgroundBurbujas';

function App() {
  return (
    <div className="App">
      
      <div><BarraDeNavegacion /></div>
      
      <div><BackgroundBurbujas/></div>
      
      
      <div><FondoGradiente/></div>
      <Curriculum />
      <div><BackgroundBurbujas/>
      </div>
    </div>
  );
}

export default App;

