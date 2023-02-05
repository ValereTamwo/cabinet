import React from 'react'
import Button from './Button'
import tribunal from '../images/tribunal.jpg'
import avocat from '../images/avocat.jpeg'
import avocat1 from '../images/avocat1.jpg'
import avocat2 from '../images/avocat2.jpeg'
import avocat3 from '../images/avocat3.jpg'



function Welcome() {

     const data = { 
    action: () => {
        console.log("ce bouton a ete cliquee");
     },
     color: "warning",
     label:"Prendre Rendez-vous"
     }
    
    return (
      <>
      <div className='container  '>
          <div className='row d-flex justify-content-md-center'> 
                    <div className='col-md-6 col-12 p-5 border-start border-5 border-warning mt-4 ' >
                        <p className='fw-bold  text-dark fs-3'>
                            Une Question en Droits Penale ?
                        </p>
                        <p>
                            Nous sommes a votre entiere disposition !!!
                        </p>
                    </div>  
          </div>
      </div>
    <div className='container '>
          <div className='row d-flex justify-content-md-center'> 
                    <div className='col-md-6 col-12 p-5   text-center' >
                        <p>
                            Addressez une demande de service aupres d'un de nos Avocats , <br />
                            Contacter Nous ou Prenez Rendez-vous dans notre centre
                        </p>
                    </div>  
          </div>
            </div>
    <div className='container  '>
          <div className='row d-flex justify-content-md-center '> 
                    <div className='col-md-6 col-12 p-5  d-flex justify-content-md-center' >
                        <p>
                             <Button action={data.action} color={data.color} label={data.label} />
                        </p>
                    </div>  
          </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <img alt='tribunal' className='img-fluid rounded' src={tribunal}></img>
                    </div>
                    <div className='col-12 mt-md-0 mt-4 col-md-6 d-md-flex justify-content-md-center text-white bg-dark align-items-center rounded'>
                        <p className=''>
                            <blockquote className='blockquote'> 
                                <p>La justice imprime la paix , la force provoque la resistance</p>
                                <footer className='blockquote-footer'>Louis de Bonald</footer>
                            </blockquote>
                        </p>
                    </div>
                </div>   
            </div>
            <div className='container'>
                <span className='fs-4 fw-bold text-dark '>
                    <li className='mt-4 mb-4'>Nos Avocats</li>
                    <p className='fs-5 fw-light'> Nous offrons une expertise encore inegalee jusqu'ici</p>
                </span>
                <div className='row'>
                    <div className='col-12 col-md-4 mb-3  '>
                        <img alt="Avocat" className='img-fluid' src={avocat} />
                    </div>
                    <div className='col-12 col-md-4 mb-3'>
                        <img alt="Avocat" className='img-fluid' src={avocat1} />
                    </div>
                    <div className='col-12 col-md-4 mb-3'>
                        <img alt="Avocat" className='img-fluid' src={avocat2} />
                    </div>
                    <div className='col-12 col-md-4 mb-3'>
                        <img alt="Avocat" className='img-fluid' src={avocat3} />
                    </div>
                </div>
            </div>
         <div className='container  '>
          <div className='row d-flex justify-content-md-center'> 
                    <div className='col-md-6 col-12 p-5 border-start border-5 border-warning mt-4 ' >
                        <p className='fw-bold  text-dark fs-3'>
                            Accreditation Juridique du Cameroon
                        </p>
                        <p>
                            Direction de la Réglementation et du Contrôle de la Qualité
                            /MINADER
                            Et Délégations Provinciales du MINADER
                            Texte de référence
                            Loi N°2001/014 du 23 juillet 2001 relative à l’activité semencière et
                            ses textes d’application 
                        </p>
                    </div>  
          </div>
            </div>
            <div className='container mt-3  '>
                <div className='row'>
                    <div className='col-md-6 col-12 d-flex flex-column border border-secondary border-2 x  rounded   justify-content-md-center align-items-center'>
                        <span className='fw-bold fs-4 '>
                            Pourquoi nous choisir nous  <span className='text-warning fs-2'>?</span>
                        </span>

                        <p>
                            <span className='text-warning fs-2'>1.</span>
                            <span className='text-warning fs-4'>Competences</span><br/>
                            <span> Une équipe d'avocats qui possèdent une grande érudition et une expérience professionnelle de plusieurs années dans diverses domaines</span>
                        </p>
                        <p>
                            <span className='text-warning fs-2'>1.</span>
                            <span className='text-warning fs-4'>Travail d'equipes</span><br/>
                            <span> Une équipe d'avocats qui possèdent une grande érudition et une expérience professionnelle de plusieurs années dans diverses domaines</span>
                        </p>
                        <p>
                            <span className='text-warning fs-2'>2.</span>
                            <span className='text-warning fs-4'>Discretion</span><br/>
                            <span> Une équipe d'avocats qui possèdent une grande érudition et une expérience professionnelle de plusieurs années dans diverses domaines</span>
                        </p>
                        <p>
                            <span className='text-warning fs-2'>3.</span>
                            <span className='text-warning fs-4'>Satisfaction du client</span><br/>
                            <span> Une équipe d'avocats qui possèdent une grande érudition et une expérience professionnelle de plusieurs années dans diverses domaines</span>
                        </p>
                         
                    </div>
                    <div className='col-md-5 p-3 col-12 d-flex align-items-center ms-md-3 rounded border border-2 border-secondary justify-content-md-center ms-md- '>

                        <form className='form '>
                            <span className='fw-bold fs-4 '>
                                Posez Nous une Question (?)
                            </span>
                            <div className='form-floating mb-3 mt-md-4'>
                                <input type='text' name='question ' className='form-control' placeholder='Poser nous une question '></input>
                                <label for="question">
                                    Vous avez une question ? 
                                </label>
                            </div>
                            <button type='submit' className='btn btn-warning' >Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
            
        <section className="container-md-fluid container justify-content-center">
        <span className='fs-4 fw-bold text-dark '>
                    <li className='mt-4 mb-4'>Nos Interventions</li>
                    <p className='fs-5 fw-light'> Nos domaines sont tres etendus</p>
                </span>
        <div className="carousel slide"  data-bs-ride="carousel" id="Image">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={avocat}  className="img-fluid d-block w-100 h-md-50" alt="img1"/>
                </div> 
                <div className="carousel-item">
                    <img src={tribunal} className="img-fluid d-block w-100 h-md-50" alt="img1"/>
                </div> 
                <div className="carousel-item">
                    <img src={avocat1} className="img-fluid d-block w-100 h-md-50" alt="img1"/>
                </div> 
                <div className="carousel-item">
                    <img src={avocat2}className="img-fluid d-block w-100 h-md-50" alt="img1"/>
                </div> 
            </div>
            <button type="button" className="carousel-control-prev" data-bs-slide="prev"  data-bs-target="Image" >
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button type="button" className="carousel-control-next" data-bs-slide="next"  data-bs-target="Image" >
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </section>
    </>
  )
}

export default Welcome