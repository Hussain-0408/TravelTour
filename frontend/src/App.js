
import './App.css';
import Home from './Components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Register from './Components/Register';
import Aboutus from './Components/Aboutus'
import OurServices from './Components/OurServices';
// import TourServices from './Components/OurServices';
import Gallary from './Components/Gallery';
import TrikkingTour from './Components/TrikkingTour'
import Logout from './Components/Logout'
import Forgotpassword from './Components/Forgotpassword';


function App() {
  return (
    <div >
      <HashRouter>
      <Routes>   
        <Route path='/' element= {<Home/>} />
        <Route path='/Login' element= {<Login/>} />
        <Route path='/contactus' element= {<Contactus/>} />
        <Route path='/Login' element= {<Register/>} />
        <Route path = '/Aboutus' element = {<Aboutus/>} />
        <Route path = '/Gallery'  element = {<Gallary/>} />
        <Route path = '/OurServices'  element = {<OurServices/>} />
        <Route path = "/trikkingtour" element = {<TrikkingTour/>} />
       <Route path = "/Logout" element = {<Logout/>} />
       <Route path = "/forgotpassword" element={<Forgotpassword />} /> 
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
