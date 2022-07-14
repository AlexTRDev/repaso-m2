import { useDispatch } from 'react-redux/'
import { useEffect } from "react"
import { getCharacters } from "./redux/actions"
import RoutesApp from "./routes/RoutesApp";

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    getCharacters()(dispatch)
  },[dispatch])

  return (
    <div className="App">
      <RoutesApp />
      {/* agregar una ruta para episodios */}
    </div>
  );
}

export default App;
