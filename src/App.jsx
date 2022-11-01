import './App.scss';
// import Characters from './pages/Characters';
// import Home from './pages/Home';
import Clase from './components/Clase';

function App() {


  // console.log("Hola desde App");
  // const nombre = "Yago";

  return (
    <div className="App">
      
      {/* <p>Hola {nombre}!</p> */}
      {/* <Home/>
      <Characters/> */}
      <Clase teacher= "Juan Macías" age= "29" />
      <Clase teacher= "Santi C." age= "23"/>
      <Clase teacher= "Roberto Cruzado" age= "40" />

      
    </div>
  );
}

export default App;
