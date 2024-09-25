import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  const [productList, setProductList] = useState([]);
  
  const getProducts= async () => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  //api 호출은 useEffect 사용
  useEffect(()=>{
    getProducts()
  },[])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3} md={4} sm={6}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home