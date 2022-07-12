import React from "react";
import { Link } from "react-router-dom"

function Navegador(){
   return(
      <>
         <nav>
            <ul>
               <li>
                  <Link to="/characters"> characters </Link>
               </li>
               <li>
                  <Link to="/character/create"> create character</Link>
               </li>

               {/* link para ver los episodios */}
            </ul>
         </nav>
      </>
   )
}

export default Navegador