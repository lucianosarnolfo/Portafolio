import React from 'react'
import './Curriculum.css'
import fotoPerfil from '../images/Foto-de-perfil.jpg'

function Curriculum() {
  return (
    <div class="curriculum">
    
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
                <td><p>Estudiante de ingenieria en sistemas, buscando mi primer trabajo en el area de programacion/desarrollo, me gusta la informatica y la musica.</p></td>
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

          <div class="col-lg-8 col--3">
            <td id="curriculum"><p> CURRICULUM VITAE</p>
            <tr>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique iusto nisi, architecto quos, ex sequi eum nam qui quasi earum labore itaque nihil tempora sunt aspernatur molestias dicta voluptates!</tr>
            <tr>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis similique iusto nisi, architecto quos, ex sequi eum nam qui quasi earum labore itaque nihil tempora sunt aspernatur molestias dicta voluptates!</tr>

            
            </td>
          </div>
          
          
        </div>


      </div>
      
    </div>
  </section>
    
    
    </div>

    







  )

}

export default Curriculum