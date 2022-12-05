/*** IMPORTAÇÃO DE COMPONENTES ***/
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

/*** IMPORTAÇÃO DE LAYOUTS ***/
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass="min-height">
        <Routes>
          <Route path='/'           element={<Home/>}       />
          <Route path='/projects'   element={<Projects/>}   />
          <Route path='/company'    element={<Company/>}    />
          <Route path='/contact'    element={<Contact/>}    />
          <Route path='/newproject' element={<NewProject/>} />
          <Route path='/project/:id' element={<Project/>} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
