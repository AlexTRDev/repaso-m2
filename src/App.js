import { Route } from "react-router-dom";
import Navegador from './components/Navegador';
import Characters from "./components/Characters";
import CreateCharacter from "./components/CreateCharacter";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <div className="App">
      <Route path="/" component = {Navegador} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
      <Route exact path="/character/create" component={CreateCharacter} />
      {/* agregar una ruta para episodios */}
    </div>
  );
}

export default App;
