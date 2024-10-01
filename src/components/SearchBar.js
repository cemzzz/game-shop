import React from 'react'
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap'


const SearchBar = ({ setSearchTerm }) => {

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); // 입력된 값으로 상태 업데이트
  };
  
  return (
    <div>
        <Container>
            <nav className='navbar-bottom'>
                <div className='search-container'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input 
                      className='navber-search-bar' 
                      type='text' 
                      placeholder='스토어 검색'
                      onChange={handleInputChange} // 입력 변화에 따라 호출
                    />
                </div>
                <div className='navbar-category-item'>탐색</div>
                <div className='navbar-category-item'>찾아보기</div>
                <div className='navbar-category-item'>새소식</div>
            </nav>
        </Container>
    </div>
  )
}

export default SearchBar