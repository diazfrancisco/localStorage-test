import React,{useState} from "react";

export default function Formulario() {

  const [nombre, setNombre] = useState("")

  const onSubmit = (nombre) => {
    console.log(nombre)
    localStorage.setItem('datos',JSON.stringify(nombre))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({nombre})
    setNombre('');
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setNombre(e.target.value)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label forHTML="nombre">Guardar nombre </label>
      <input 
        type="text"
        id="nombre"
        value={nombre}
        onChange={handleChange}
        placeholder="Ingresa tu nombre"

      />          
      <button>Enviar a localStorage</button>
    </form>
  )
}