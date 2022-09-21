import './App.css';
import Nav from './Nav';
import Home from './Home';
import Nav2 from './Nav2';
import ContactUs from './ContactUs';
import OurProducts from './OurProducts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
    <Nav2 />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='/products' element={<OurProducts />}/>
    </Routes>
    </div>
  );
}

export default App;
