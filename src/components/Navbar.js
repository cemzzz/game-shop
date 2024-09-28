import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


const Navbar = ({authenticate, setAuthenticate}) => {
  const navigate = useNavigate()
  const goLoginPage = () => {
    navigate('/login')
  }
  const LogOut = () =>{
    setAuthenticate(false)
    navigate('/')
  }
 
  return (
    <div>
        <nav className='navbar-top'>
            <div className='navbar-top-left'>
                <FontAwesomeIcon className='navbar-top-logo' icon={faGamepad}/>
                <h5 className='navbar-top-store-name'>STORE</h5>
            </div>
            <div className='navbar-top-right'>
              {
                authenticate === true 
                ? <button className='navbar-top-login-button' onClick={LogOut}>로그아웃</button>
                : <button className='navbar-top-login-button' onClick={goLoginPage}>로그인</button>
              }
            </div>
        </nav>

    </div>
  )
}

export default Navbar