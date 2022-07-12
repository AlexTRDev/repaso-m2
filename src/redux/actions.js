//  https://rickandmortyapi.com/api/character    .results - ?name=rick
//  https://rickandmortyapi.com/api/            (character, locations, episodes)

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_CHARACTERS_BY_ID = "GET_CHARACTER_BY_ID"
const CREATE_CHARACTER = "CREATE_CHARACTER"
const DELETE_CHARACTER = "DELETE_CHARACTER"
// creamos la funcion para obtener todos los personajes
const getCharacters = () => ( dispatch ) => {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((res) => dispatch({ type: GET_CHARACTERS, payload: res }));
};


//https://rickandmortyapi.com/api/character/2
// CRUD => CREATE- READ - UPADATE - DELETE

// const personaje = getCharacerById(5)(dispatch)

const getCharacterById = ( id ) => ( dispatch ) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then( res => res.json() )
    .then( data => dispatch({
      type: GET_CHARACTERS_BY_ID,
      payload: data
    }))
}

let id = 3
const createCharacter = ( character ) => {
    id = id + 1 // id++
    return {
      type: CREATE_CHARACTER,
      payload: {...character, id }
    }
}

const deleteCharacter = ( id ) =>{
  return {
    type: DELETE_CHARACTER,
    payload: id
  }
}

export {
  //constantes
  GET_CHARACTERS,
  GET_CHARACTERS_BY_ID,
  CREATE_CHARACTER,
  DELETE_CHARACTER,
  //metodos
  getCharacters,
  getCharacterById,
  createCharacter,
  deleteCharacter
}

// obtener personajes por id


// crear acciones para crear, editar y eliminar