import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bmxImg from '..//public/bmx.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <img src={bmxImg} className="bmx" alt="bmx imagen" />
    <h2> <strong>Nombre: </strong> <small> Berselis J. Mendoza M.</small></h2>
    <h2> <strong>Edad: </strong> <small> 35 años</small></h2>
    <h2> <strong>Deporte Fav: </strong> <small> BMX Street</small></h2>
    <h2> <strong>Pasatiempo: </strong> <small> Explorar lugares nuevos</small></h2>
   </div>
  )
}

export default App
