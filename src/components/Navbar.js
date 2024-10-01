import React from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = ({authenticate, setAuthenticate}) => {
  const navigate = useNavigate()
  const goHomePage = () =>{
    navigate('/')
  }
  const goLoginPage = () => {
    navigate('/login')
  }
  const LogOut = () =>{
    setAuthenticate(false)
    navigate('/')
  }
  const goCartPage = () =>{
    navigate('/cart')
  }

  //장바구니 항목 수 가져오기
  const cartItemsCount = useSelector((state) => state.cart.length);
 
  return (
    <div>
        <nav className='navbar-top'>
            <div className='navbar-top-left'>
                <FontAwesomeIcon className='navbar-top-logo' onClick={goHomePage} icon={faGamepad}/>
                <h5 className='navbar-top-store-name' onClick={goHomePage}>STORE</h5>
            </div>
            <div className='navbar-top-right'>
              {
                authenticate === true 
                ? <div className='navbar-cart-area'>
                    <FontAwesomeIcon className='navbar-cart-button' onClick={goCartPage} icon={faCartShopping} />
                    {cartItemsCount > 0 && ( 
                      <div className='navbar-cart-num'>{cartItemsCount}</div>
                    )}
                  </div>
                : ""
              }
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