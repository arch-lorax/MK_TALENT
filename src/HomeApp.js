import React from 'react'
import Home from './components/home/Home';
import Register from './components/registration/Register';
import MoreInformation from './components/registration/moreInformation/MoreInformation';
import ModelRegistration from './components/registration/modelRegistration/ModelRegistration';
import NavbarApp from './components/navbar/Navbar';
import Model from './utils/Model'
import Login from './components/login/Login'
import { Route, Routes } from 'react-router-dom';
const HomeApp = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const handleShowLoginOpen = () => setShowLogin(true);
  const handleShowLoginClose = () => setShowLogin(false);
  return (
    <div>

      <Model show={showLogin} onClosed={handleShowLoginClose} ><Login /></Model>
        <NavbarApp modelOpen={handleShowLoginOpen}/>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/registeruser' element={<ModelRegistration/>} />


          


        </Routes>
    </div>
  )
}

export default HomeApp