import React, {useState} from 'react'

const Context = React.createContext({});

export function UserContextProvider ({children}) {

  const [nombre,setNombre] = useState(
    () => JSON.parse(localStorage.getItem('datos')).nombre
    )
  
  return <Context.Provider value ={{nombre, setNombre}}>
    {children}
  </Context.Provider>

}

export default Context


