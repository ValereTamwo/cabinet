import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome';
import Gallery from './pages/Gallery';
import Actualite from './pages/Actualite';
import Rdv from './pages/Rdv';
import Propos from './pages/Propos';
import Competence from './pages/Competence';
import Contact from './pages/Contact';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/galerie' element={<Gallery/>}></Route>
        <Route exact path='/welcome' element={<Welcome />}>  </Route>
        <Route exact path='/actualite' element={<Actualite />}></Route>
        <Route exact path='/rdv' element={<Rdv />}></Route>
        <Route exact path='/propos' element={<Propos />}></Route>
        <Route exact path='/prestations' element={<Competence />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
