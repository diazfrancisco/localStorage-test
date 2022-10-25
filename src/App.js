import logo from './logo.svg';
import './App.css';
import Mensaje from './components/mensaje'
import Formulario from './components/form/Form';
import Cartel from './components/cartel';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Mensaje 
          className="msj"
        />
        <Formulario />
        <h3>La ultima vez se ingreso: </h3>
        <Cartel />
      </header>
    </div>
  );
}

export default App;
