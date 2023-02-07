import React from 'react'
import { Link } from 'react-router-dom'
import maison from '../images/maison.jpg'

function Compet() {
  return (
      <>
          <div className='container-fluid bg-light'>
            <div className='container h-100 bg-secondary     p-3 mt-3 mb-3 rounded'>
              <span className='fs-1 text-light'>
                  Competences
              </span>
              <nav className='nav' aria-label='breadcrumb'>
              <ol className='breadcrumb text-light '>
                  <li className='breadcrumb-item '><Link to='/' >Accueil</Link></li> 
                  <li className='breadcrumb-item active'>Competences</li> 
                  {/* <li className='breadcrumb-item'><Link to='/' >Actualite</Link></li>  */}  
              </ol>
              </nav>
              <div className='h-30  '>
                  <p className='fw-bold fs-4 text-light' >
                     <li className='list-item'>  Droit Imobilier </li>          
                  </p>
              </div>
                </div>
          </div>
          <div className='container'>
              <div className='row'>
                  <div className='col-12 col-md-6'>
                      <img src={maison} alt='maison' className='img-fluid'/>
                  </div>
                  <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
                             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker

                  </div>
              </div>
          </div>
      </>
  )
}

export default Compet