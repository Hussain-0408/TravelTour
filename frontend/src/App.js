
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Register from './Components/Register';
import Aboutus from './Components/Aboutus';
import OurServices from './Components/OurServices';
import Tourpackages from './Components/Tourpackages';
import Gallary from './Components/Gallery';
import Logout from './Components/Logout'
import Forgotpassword from './Components/Forgotpassword';
import BookingForm from './Components/BookingForm';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Gallery' element={<Gallary />} />
          <Route path='/OurServices' element={<OurServices />} />
          < Route path='/Tourpackages' element={<Tourpackages />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/BookingForm" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
