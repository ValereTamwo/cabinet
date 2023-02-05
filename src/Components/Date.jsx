import React from 'react'

function Date() {

    const style = [{
        'height': '80vh'
    },
    {
        'border': 0,
        'width': 800,
        'height':600
        }
    ]

    

    return (
      <>
         <div className='container d-flex justify-content-center '>
                <div className='fw-bold col-12 col-md-4 fs-3 mt-5 mb-4'>
                Prise de Rendez-Vous
                </div>
                   
            </div>
         <div className='container d-flex justify-content-center '>
                   <div className='col-12 col-md-4'>
                    Fixez la date et l’heure qui vous conviennent, un membre de l’équipe
                    de notre cabinet répondra à toutes vos interrogations !
                </div>
            </div>
        <div className='container d-flex justify-content-center '>
                   <div className='col-12 col-md-8 mt-4 bg-light d-flex' style={style[0]}>
                    <div className=' w-50    h-100 border border-start border-2 border-warning'>
                        <iframe src="https://calendar.google.com/calendar/embed?src=valeretamwo%40gmail.com&ctz=Africa%2FLagos" className='w-100 h-75'   frameborder="0">       </iframe>
                    </div>
                    <div className='w-50  h-100 p-3'>
                        <div className='container p-3 bg-dark text-light rounded   d-flex justify-content-center'>
                            <span>
                                La rencontre durera 20 mins
                            </span>
                        </div>
                    </div>
                   </div>
            </div>
            
     </>
  )
}

export default Date