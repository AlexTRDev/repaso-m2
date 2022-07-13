import React from 'react'
import { Route } from "react-router-dom";
import Navegador from "../components/Navegador"
import Characters from "../components/Characters"
import CharacterDetail from "../components/CharacterDetail"
import CreateCharacter from "../components/CreateCharacter"
import Episodios from "../components/Episodios"

function RoutesApp() {
  return (
   <>
      <Route path="/" component = {Navegador} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/characters/:id" component={CharacterDetail} />
      <Route exact path="/character/create" component={CreateCharacter} />
      <Route exact path="/episodios" component={Episodios} />
   </>
  )
}

export default RoutesApp