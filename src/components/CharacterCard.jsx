import React from 'react'
import styled from 'styled-components'

function CharacterCard( props ) {
   const { name, species, status, gender, origin, image } = props
   return (
      <Card colorPrimary="purple">
         <div>
            <h1>{name}</h1>
         </div>
         <div>
            <img src={image} alt={name} />
         </div>
         <div>
            <p>{species}</p>
            <p>{status}</p>
            <p>{gender}</p>
            <p>{origin?.name}</p>
         </div>
      </Card>
   )
}

const Card = styled.div`
   width: 250;
   height: 350;
   display: flex;
   flex-direction: column;
   border: 1px solid rgba(0,0,0,.2);
   margin: 20px;
   padding: 20px;
   border-radius: 15px;
   box-shadow:  20px 20px 50px rgba(0,0,0,.5);
   background: ${({colorPrimary}) => colorPrimary ? colorPrimary : "green"};
   color:white;

   h1{
      font-size: 16px;
      text-align: center;
      height: 15px;
   }

   img{
      width: 200px;
   }
   p{
      font-size: 12px;
   }
`

export default CharacterCard