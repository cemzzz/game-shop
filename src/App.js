import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productDetail' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
