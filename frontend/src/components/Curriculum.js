import React from 'react'
import './Curriculum.css'
import fotoPerfil from '../images/Foto-de-perfil.jpg'

function Cuerpo() {
  return (
    <div class="cuerpo">
    
    <section class="section">
    <div class="containerPrincipal container-fluid">
      <div class="textParallax d-flex">

        <div class="row">
          <div class="col-3 ml-4">
            
            <table class="tableCurriculum">
            <img src={fotoPerfil} alt="fotoDePerfil" id="fotoDePerfil"></img>
              <tr>
                <th><i class="fa-solid fa-user"></i>SOBRE MI</th>
              </tr>
              <tr>
                <td>Estudiante de Ing en
                  Sistemas.
                  Me considero una persona
                  responsable y que se lleva
                  bien trabajando en equipo.
                  Buscando mi primera
                  experiencia laboral en el
                  rubro</td>
              </tr>
              <tr>
                <th>
                  <i class="fa-solid fa-paper-plane"></i>CONTACTO
                </th>
              </tr>
              <tr>
                <td>
                  
                </td>
              </tr>
            </table>
  
          </div>

          <div class="col-lg-8 col--3 mr-4">
            <td ><p id="titulo"> CURRICULUM VITAE</p></td>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique iusto nisi, architecto quos, ex sequi eum nam qui quasi earum labore itaque nihil tempora sunt aspernatur molestias dicta voluptates!
          </div>
          
          
        </div>


      </div>
      
    </div>
  </section>
    
    
    </div>

    







  )

}

export default Cuerpo