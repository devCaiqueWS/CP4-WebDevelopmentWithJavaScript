import {} from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav(){
  return(
    <>
    <div id="nav">
      <h1>Vinheiria Agnello</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Exemplo1">Sobre</NavLink>
      <NavLink to="/Exemplo2">Produtos</NavLink>
    </div>
    </>
  )
}
export default Nav