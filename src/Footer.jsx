import {} from 'react'
import './Footer.css'

function Footer(){
  return(
    <>
     <footer className="container-footer">
      <div style={{backgroundColor: "#800000", color:"white"}}>
        <br />
        <p>&copy; 2023 Copyright: Vinheiria Agnello</p>
        <p>Telefone: (+55) 11 98765-4321</p>
        <p>E-mail: <a href="contato@agnello.com.br">contato@agnello.com.br</a></p>
        <br /><br />
      </div>
     </footer>
    </>
  )
}
export default Footer