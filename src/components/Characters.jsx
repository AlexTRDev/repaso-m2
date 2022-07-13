import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/'
import { getCharacters } from "../redux/actions"


//useSelector => estadoglobal
// const personajes = useSelector((state) => state.characters) // MapStateToProps
// const dispatch = useDispatch()           // MapDispatchToProps
// useEfect // ciclo de vida del componente
// useState // estado local de las variables

function Characters( props ) {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  
  useEffect(()=>{
    getCharacters()(dispatch)
    setData( props.personajes )
  },[data])

  return (
      <>
        <h1> Personajes </h1>
        {
          data && 
          data.map( (personaje) => {
            return (
              <div key={personaje.id}>
                <h1>{personaje.name}</h1>
                <h3>{personaje.species}</h3>
                <img src={personaje.image} alt={personaje.name} />
              </div>
            )
          })
        }
      </>
    )
  }
  
const mapStateToProps = ( state ) => {
  return {
    personajes: state.characters
  }
}


export default connect(mapStateToProps, )(Characters);
  
// export default Characters


// import React, { useState } from 'react'
// 

// function Characters() {
//   const [count, setCount] = useState(0)

//   const handleClick = (valor) => {
//     setCount(count + valor)
//   }

//   return (
//     <>
//       <div>Aqui iran nuestros personajes</div>
//       <button onClick={()=>handleClick(10)}>aumentar + 10</button>
//       <h3>{count}</h3>
//     </>
//     )
//   }
  
  
// export default Characters
  
  
// import { connect } from "react-redux";
// import { getCharacters } from "../redux/actions"
// ------------------------ COMPONENTS CON CLASES -------------------------------------------
// class Characters extends React.Component{

//   componentDidMount(){
//     this.props.getCharacters()
//     console.log(this.props.personajes)
//   }

//   render(){
//     return(
//       <>
//         <h1> Personajes </h1>
//         {
//           this.props.personajes && 
//           this.props.personajes.map( (personaje) => {
//             return (
//               <div key={personaje.id}>
//                 <h1>{personaje.name}</h1>
//                 <h3>{personaje.species}</h3>
//                 <img src={personaje.image} alt={personaje.name} />
//               </div>
//             )
//           })
//         }
//       </>
//     )
//   }
// }

// const mapStateToProps = ( state ) => {
//   return {
//     personajes: state.characters
//   }
// }

// const mapDispatchToProps = {
//   getCharacters
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Characters);



// --------------------------------------------------------------------------------------------------

// class Characters extends React.Component{

//   // state = useState()
//   constructor(props){
//     super( props )
//     this.state = { contador: 0 }
//     // this.buttonClick = this.buttonClick.bind(this)
//   }

//   handleClick = () => {
//     this.setState({
//       contador: this.state.contador + 10
//     })
//   }

//   // ciclo de vida => useEfect()
//   componentDidMount(){
//     //...Esta funcion se ejecuta cuando se monta el componente
//   }

//   componentDidUpdate(){
//     //... Esta funcion se ejecuta cuando se actualiza cualquier valor del componente
//   }

//   componentWillUnmount(){
//     //... Esta funciona se desmonta cunado se da de baja a un componente

//   }


//   render(){
//     return (
//       <>
//         {
//           this.state.contador && 
//           <>
//             <h1>Aqui les muestro mi contador</h1>
//             <button onClick={this.handleClick}>presionar</button>
//             <h3>Contador: {this.state.contador}</h3>
//           </>
//         }

//       </>
//     )
//   }
// }
//matchToprops

//matchDispatch

//conexion

// export default Characters