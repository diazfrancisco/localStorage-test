import React,{useContext} from "react"; 
import Context from '../../context/useContextStorage'

export default function Cartel() {
  
  const {nombre} = useContext(Context)
  
  console.log(nombre)
  
  return (
    <div className="cartel">
      <h4>{nombre}</h4>
    </div>
)
}