import React from 'react'
import Button from './Button';
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {

    const data = { 
    action: () => {
        console.log("ce bouton a ete cliquee");
     },
     color: "warning",
     label:"Prendre Rendez-vous"
}
  return (
    <header className='sticky-md-top container-fluid navbar navbar-expand-lg bg-dark navbar-dark shadow'>

      <Link className='navbar-brand ms-4'  to='/'>
        <img src={logo} alt='logo' className='logo'/>
        <span className='ms-2'>Cabinet Maitre Choupo</span>
      </Link>

      <button className='btn navbar-toggler border-0'  data-bs-toggle='collapse' data-bs-target='#Submenu'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='navbar-collapse collapse marge justify-content-center' id='Submenu'>
        <ul className='navbar-nav ms-5 '>
          <li className='nav-item'><Link to='/' className='nav-link'>Accueil</Link></li>
          <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
          <li className='nav-item'><Link to='/propos' className='nav-link'>A propos</Link></li>
        <li className='nav-item'><Link to='/galerie' className='nav-link'>Galerie</Link></li>
        <li className='nav-item'><Link to='/actualite' className='nav-link'>Actualite</Link></li>
        {/* <li className='nav-item'><Link to='/' className='nav-link'>BLog</Link></li> */}

        <li className='nav-item dropdown' ><a className='nav-link dropdown-toggle'  href='/' data-bs-toggle="dropdown">Prestations</a>
          <ul className='dropdown-menu  justify-content-center  ' >
            <span className='text-warning'> Choupo Francis </span>
            <li><Link className='dropdown-item' to='/prestations'>Droit Commerciales</Link></li>
            <li><Link className='dropdown-item' to='/prestations'>Droit Immobilier</Link></li>
            <li><Link className='dropdown-item' to='/prestations'>Droit Fiscal</Link></li>
            <li><Link className='dropdown-item' to='/prestations'>Droit des Entreprises</Link></li>
            <li><Link className='dropdown-item' to='/prestations'>Droit des Affaire</Link></li>
            <li><Link className='dropdown-item' to='/prestations'>Droit Social</Link></li>
              

          </ul>
          </li>
        </ul>
       
        <div className=' ms-5 '>
           <Button action={data.action} color={data.color} label={data.label} />
        </div>
       </div>
    </header>

  )
}

export default Navbar