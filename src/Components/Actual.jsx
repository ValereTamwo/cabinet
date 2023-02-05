import React from 'react'
import { Link } from 'react-router-dom'
import avocat3 from '../images/avocat3.jpg'



function Actual() {
    const style = {
        "height": "24vh"
    }
    return (
      <>
      <div className='container-fluid bg-dark mt-4 ' style={style}>
          <div className='container h-100 bg-light p-3'>
              <span className='fs-1 text-dark'>
                  Actualite
              </span>
              <nav className='nav' aria-label='breadcrumb'>
              <ol className='breadcrumb text-light '>
                  <li className='breadcrumb-item '><Link to='/' >Accueil</Link></li> 
                  <li className='breadcrumb-item active'>Actualite</li> 
                  {/* <li className='breadcrumb-item'><Link to='/' >Actualite</Link></li>  */}  
              </ol>
              </nav>
              <div className='h-30  '>
                  <p className='fw-bold fs-8'>
                      Vivez l'actualite Jurique , soyez Informer des reformes constitutionelles en temps reel
                  </p>
              </div>
          </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-3 me-3 mb-3'>
                        <div className='card'>
                            <img alt='img' src={avocat3} className='card-img-top  img-fluid' />
                            <div className='card-body'>
                                <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                <p className='card-text '>
                                    la court de justice adopte suivant la constitution en vigueur une une loi 
                                </p>
                                <a href="/" class="btn btn-warning">En Savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 me-3 mb-3'>
                        <div className='card'>
                            <img alt='img' src={avocat3} className='card-img-top  img-fluid' />
                            <div className='card-body'>
                                <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                <p className='card-text '>
                                    la court de justice adopte suivant la constitution en vigueur une une loi 
                                </p>
                                <a href="/" class="btn btn-warning">En Savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 me-3 mb-3'>
                        <div className='card'>
                            <img alt='img' src={avocat3} className='card-img-top  img-fluid' />
                            <div className='card-body'>
                                <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                <p className='card-text '>
                                    la court de justice adopte suivant la constitution en vigueur une une loi 
                                </p>
                                <a href="/" class="btn btn-warning">En Savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 me-3 mb-3'>
                        <div className='card'>
                            <img alt='img' src={avocat3} className='card-img-top  img-fluid' />
                            <div className='card-body'>
                                <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                <p className='card-text '>
                                    la court de justice adopte suivant la constitution en vigueur une une loi 
                                </p>
                                <a href="/" class="btn btn-warning">En Savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-3 me-3 mb-3'>
                        <div className='card'>
                            <img alt='img' src={avocat3} className='card-img-top  img-fluid' />
                            <div className='card-body'>
                                <h5 className='card-title'> Adoption d'une nouvelle loi</h5>
                                <p className='card-text '>
                                    la court de justice adopte suivant la constitution en vigueur une une loi 
                                </p>
                                <a href="/" class="btn btn-warning">En Savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
    </>
  )
}

export default Actual