import React, { useEffect, useState } from 'react'
import './Home.css';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCarousel from '../components/ProductCarousel';
import SearchBar from '../components/SearchBar';
import Spinner from 'react-bootstrap/Spinner';


const Home = () => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  
  const getProducts= async () => {
    setLoading(true); // 데이터 로딩 시작
    try{
      // let url = `https://my-json-server.typicode.com/cemzzz/game-shop/db/products`
      let url = `http://localhost:5000/products`
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("Error fetching products:", error); 
    } finally {
      setLoading(false);  // 데이터 로딩 완료
    }
  }

  //api 호출은 useEffect 사용
  useEffect(()=>{
    getProducts()
  },[])

  // like 상위 제품 정렬
  const sortedProduct = [...productList]
    .sort((a, b) => b.like - a.like) // 내림차순
    .slice(0, 5); // 상위 5개 선택

  // 검색어에 따라 필터링된 제품 리스트
  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  return (
    <div>
      {loading 
        ? (
          <Container>
            <div className='home-loading-container'>
              <Spinner className='home-loading' animation="border" />
              <p className='home-loading-text'>상품 정보를 불러오는 중입니다.</p>
            </div>
          </Container>
        ): (
          <Container>
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Row>
              <ProductCarousel sortedProduct={sortedProduct}/>
            </Row>
            <Row>
              {filteredProducts.map((menu)=>(
                <Col key={menu.id} lg={3} md={4} sm={6}>
                  <ProductCard item={menu}/>
                </Col>
              ))}
            </Row>
        </Container>
        )
      }
      
    </div>
  )
}

export default Home