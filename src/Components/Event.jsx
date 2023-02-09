import React from 'react'
import tribunal from '../images/tribunal.jpg'
import avocat from '../images/avocat.jpeg'
import avocat1 from '../images/avocat1.jpg'
import avocat2 from '../images/avocat2.jpeg'
import avocat3 from '../images/avocat3.jpg'

import img1 from '../images/img1.jpg'
// import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'



export function Eventpass(props) {
  return (
    <>
      <div className='container p-3'>
        <div className='row mt-4 mb-3 '>
          <div className='col-12 p-2 mb-2 col-md-4 p-0 p-md-4 me-1 me-md-2 d-flex justify-content-md-center align-items-center rounded border border-2 border-warning'>
            <span className='fw-bold'>
              Evenement : 
            </span>
            <span>
                    {props.name}
            </span>
          </div>
          <div className='col-12 p-2 mb-2 col-md-4  p-0 me-1 fs-9 p-md-4 me-md-2 d-flex justify-content-md-center align-items-center border border-2 border-secondary rounded'>
            <span className='fw-bold'>
              Date : 
            </span>
            <span className=''>
              {props.date}
            </span>
          </div>
          <div className='col-12 p-2 mb-2 col-md-3 p-0  p-md-4 d-flex justify-content-md-center align-items-center rounded border border-2 border-warning '>
            <span className='fw-bold'>
              Lieu : 
            </span>
            <span className=''>
              {props.lieu}
            </span>
          </div>
        </div>
        <fieldset className='p-3  rounded'>
          <legend className='fs-5 p-3 w-100 border-start border-5 border-warning'>{props.titre}</legend>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-12 ms-3    mb-3  '>
                  <img src={tribunal} className='img-fluid' alt='#'/>
              </div>
              <div className='col-md-3 col-12 ms-3    mb-3  '>
                  <img src={img1} className='img-fluid' alt='#'/>
              </div>
              <div className='col-md-3 col-12 ms-3    mb-3  '>
                  <img src={avocat2} className='img-fluid' alt='#'/>
              </div>
              <div className='col-md-3 col-12 ms-3    mb-3 '>
                  <img src={img3} className='img-fluid' alt='#'/>
              </div>

            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

function Event() {

  const event = {
    name: 'Decision de peine',
    titre:'Condanation de Andrew Teslere : Meurtre',
    date: '14 Avril 2022',
    lieu: 'Palais de Justice de Yaounde',
    image:""
  }

    const event2 = {
    name: 'Ceremonie de Prise de Poste',
    titre:'Bareaux juridiques du cameroon',
    date: '14 Avril 2022',
    lieu: 'Palais de Justice de Yaounde',
    image:""
  }

  return (
    <>
       <div className='container p-3'>
        <span className='fs-4  fw-bold text-dark'>
        <li>
          <span className=''>
            Decouvrer Notre Galerie D'images
          </span>
        </li>
        </span>
      </div>
      <Eventpass name={event2.name} date={event2.date} lieu={event2.lieu} titre={event2.titre} />
      <Eventpass name={event.name} date={event.date} lieu={event.lieu} titre={event.titre} />
      <Eventpass name={event.name} date={event.date} lieu={event.lieu} titre={event.titre} />

    </>
  )
}

export default Event