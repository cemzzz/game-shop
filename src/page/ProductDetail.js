import React, { useEffect, useState } from 'react'
import './ProductDetail.css';
import SearchBar from '../components/SearchBar';
import ProductDetailInfo from '../components/ProductDetailInfo';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  const getProductDetail = async () => {
    setLoading(true); 
    try{
      let url = `https://my-json-server.typicode.com/cemzzz/game-shop/products/${id}`
      // let url = `http://localhost:5000/products/${id}`
      let response = await fetch(url)
      if (!response.ok) {
        throw new Error("예기치 못한 오류가 발생하였습니다.");
      }
      let data = await response.json()
      setProduct(data); 
    } catch (error){
      console.error("Error fetching product detail:", error);
    } finally {
      setLoading(false); // 데이터 로딩 완료 
    }
   
  }

  useEffect(()=>{
    getProductDetail()
    window.scrollTo(0, 0);
  },[id])

  return (
    <div>
      {
        loading ?
        (
          <div className="product-loading-container">
            <Spinner className='product-loading' animation="border" />
            <p className='product-loading-text'>상품 정보를 불러오고 있는 중입니다.</p>
          </div>
        ) : (
          <div>
            <SearchBar />
            <ProductDetailInfo product={product}/>  
          </div>
        )
      }
    </div>
  )
}

export default ProductDetail