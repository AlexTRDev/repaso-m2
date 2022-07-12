import { 
    GET_CHARACTERS,
    GET_CHARACTERS_BY_ID,
    CREATE_CHARACTER,
    DELETE_CHARACTER,
} from "./actions";

const initialState = {
    characters: [],
    character:{}
}

const reducer = (state = initialState, { type, payload }) => {
   
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload
            }
        // recibir las acciones aqui
        
        case GET_CHARACTERS_BY_ID:
            return {
                ...state,
                character: payload
            }
        case CREATE_CHARACTER:
            return{
                ...state,
                characters: [...state.characters, payload]
            }
        case DELETE_CHARACTER:
            return{
                ...state,
                characters: state.characters.filter( character => character.id !== payload )
            }
        default:
            return {...state};
    }
}

export default reducer