import React from 'react'
import './Navbar.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar-top'>
            <div className='navbar-top-left'>
                <FontAwesomeIcon className='navbar-top-logo' icon={faGamepad}/>
                <h5 className='navbar-top-store-name'>STORE</h5>
            </div>
            <div className='navbar-top-right'>
                <button className='navbar-top-login-button'>로그인</button>
            </div>
        </nav>
        <Container>
            <nav className='navbar-bottom'>
                <div className='search-container'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input className='navber-search-bar' type='text' placeholder='스토어 검색'/>
                </div>
                <div className='navbar-category-item'>탐색</div>
                <div className='navbar-category-item'>찾아보기</div>
                <div className='navbar-category-item'>새소식</div>
            </nav>
        </Container>

    </div>
  )
}

export default Navbar