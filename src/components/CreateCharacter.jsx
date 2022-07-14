import React, { useState } from 'react'
import { useDispatch } from 'react-redux/'
import { createCharacter } from '../redux/actions'

const initialState={
  // nombre:"",
  // especie:"",
  // estado:"",
  // genero:"",
  // origen:""
}


function CreateCharacter() {
  const [formulario, setFormulario] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(createCharacter( formulario ))
    alert("Personaje Creado...!")
  }

  return (
    <div>
      <h1>
        CreateCharacter
      </h1>
      <form >
        {/* <label>Nombre</label> */}
        <input type="text" placeholder='Nombre' name='name' onChange={handleChange}/>
        <br />
        {/* <label>Especie</label> */}
        <input type="text" placeholder='Especie' name="species" onChange={handleChange}/>
        <br />
        {/* <label>Estado</label> */}
        <input type="text" placeholder='Estado' name='status' onChange={handleChange}/>
        <br />
        {/* <label>Genero</label> */}
        <input type="text" placeholder='Genero' name='gender' onChange={handleChange}/>
        <br />
        {/* <label>Origen</label> */}
        <input type="text" placeholder='Origen' name="origin" onChange={handleChange}/>
        <br />
        <input type="text" placeholder='Imagen Url' name="image" onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Confirmar</button>
        <button>Cancelar</button>
      </form>
    </div>
  )
}

export default CreateCharacter
