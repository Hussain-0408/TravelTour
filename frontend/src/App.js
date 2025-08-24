
import './App.css';
import Home from './Components/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Register from './Components/Register';
import Aboutus from './Components/Aboutus'
import OurServices from './Components/OurServices';
// import TourServices from './Components/OurServices';
import Tourpackages from './Components/Tourpackages';
import Gallary from './Components/Gallery';
import Logout from './Components/Logout'
import Forgotpassword from './Components/Forgotpassword';
import BookingFarm from './Components/BookingFarm';


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
        < Route path ='/Tourpackages' element = {<Tourpackages/>} />
       <Route path = "/Logout" element = {<Logout/>} />
       <Route path = "/forgotpassword" element={<Forgotpassword />} />
       <Route path = "/BookingFarm" element={<BookingFarm/>} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
