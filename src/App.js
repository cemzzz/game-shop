import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
