import React from 'react'
import { Link } from 'react-router-dom'
import avocat3 from '../images/avocat3.jpg'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import Button from './Button'

function Proposbody() {
    const style = {
        // 'height': '40vh',
    }


    const data = { 
    action: () => {
        console.log("ce bouton a ete cliquee");
     },
     color: "warning",
     label:"Prendre Rendez-vous"
}


    return (
        <>
            <div className='container-fluid bg-light'>
            <div className='container h-100 bg-dark p-3 mt-3 mb-3 rounded'>
              <span className='fs-1 text-light'>
                  A propos
              </span>
              <nav className='nav' aria-label='breadcrumb'>
              <ol className='breadcrumb text-light '>
                  <li className='breadcrumb-item '><Link to='/' >Accueil</Link></li> 
                  <li className='breadcrumb-item active'>A props</li> 
                  {/* <li className='breadcrumb-item'><Link to='/' >Actualite</Link></li>  */}  
              </ol>
              </nav>
              <div className='h-30  '>
                  <p className='fw-bold fs-8 text-light' >
                      la justice est la cle d'un monde meilleur ou tout les hommes <seraient></seraient> en paix
                  </p>
              </div>
                </div>
            </div>
            <div className='container d-flex justify-content-center   '>
                <div className='row'>
                    <div className='col-12 col-md-4 bg-light d-flex flex-column justify-content-center align-items-center p-4' style={style}>
                        <div className='  d-flex align-items-center '>
                            <img alt='#' src={img2} className='img-fluid mt- mb-md-3' />
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title h3 fw-bold '>
                                Droits
                            </h1>
                        </div>
                        <p className='card-text'> Nous jouons un r??le cl?? dans le monde des affaires. Sp??cialis?? dans le droit commercial et le droit des soci??t??s).
                        </p>
                            <Button action={data.action} color={data.color} label={data.label} />

                    </div>
                    <div className='col-12 col-md-4 bg-warning mb-4  d-flex flex-column justify-content-center align-items-center p-4' style={style}>
                        <div className='  d-flex align-items-center '>
                            <img alt='#' src={img1} className='img-fluid mt- mb-md-3' />
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title h3 fw-bold '>
                                Affaires
                            </h1>
                        </div>
                        <p className='card-text'> Nous jouons un r??le cl?? dans le monde des affaires. Sp??cialis?? dans le droit commercial et le droit des soci??t??s).
                        </p>
                            <Button action={data.action} color={data.color} label={data.label} />

                    </div>
                    <div className='col-12 col-md-4 bg-light d-flex flex-column justify-content-center align-items-center p-4' style={style}>
                        <div className='  d-flex align-items-center '>
                            <img alt='#' src={img3} className='img-fluid mt- mb-md-3' />
                        </div>
                        <div className='card-body'>
                            <h1 className='card-title h3 fw-bold '>
                                Contentieux
                            </h1>
                        </div>
                        <p className='card-text'> Nous jouons un r??le cl?? dans le monde des affaires. Sp??cialis?? dans le droit commercial et le droit des soci??t??s).
                        </p>
                            <Button action={data.action} color={data.color} label={data.label} />

                    </div>
                </div>
            </div>  
            <div className='container'>
                <span className='fs-4 fw-bold text-dark '>
                    <li className='mt-4 ms-5 mb-4'>A propos de Nous</li>
                </span>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-6 col-12 d-flex justify-content-center p-4 bg-light rounded'>
                        <p>
                            u'est-ce que le Lorem Ipsum?
                            Le Lorem Ipsum est simplement du faux texte employ?? dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les ann??es 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour r??aliser un livre sp??cimen de polices de texte. Il n'a pas fait que survivre cinq si??cles, mais s'est aussi adapt?? ?? la bureautique informatique, sans que son contenu n'en soit modifi??. Il a ??t?? popularis?? dans les ann??es 1960 gr??ce ?? la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus r??cemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker
                        </p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Proposbody