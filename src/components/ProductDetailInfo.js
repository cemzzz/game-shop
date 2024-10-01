import React, {useEffect, useState} from 'react'
import './ProductDetailInfo.css';
import { Col, Container, Row } from 'react-bootstrap'
import SpecInfo from './SpecInfo';

const ProductDetailInfo = ({product}) => {
  const originalPrice = product?.price; // 원래 가격
  const discountedPrice = originalPrice - (originalPrice * (product?.discountRate / 100)); // 할인 가격
  
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (product?.detailImages?.length > 0) {
      setSelectedImage(product.detailImages[0]);
    }
  }, [product]);

  return (
    <div>
      <Container className='product-Detail-container'>
        <Row>
          <Col className='product-info-img-container' lg={7} md={12} sm={12} xs={12}>
            <div>
              <img src={selectedImage} alt='' className="product-info-main-img"/>
            </div>
            <div className='product-info-sub-img-container'>
              {product?.detailImages?.map((imgUrl) =>(
                <img 
                  key={imgUrl}
                  className={`product-info-sub-img ${selectedImage === imgUrl ? 'selected' : ''}`}
                  src={imgUrl}
                  alt=''
                  onClick={()=>setSelectedImage(imgUrl)}
                />
              ))}
            </div>
          </Col>
          <Col className='product-info-detail-container' lg={5} md={12} sm={12} xs={12}>
            <div className='product-Detail-title'>
              {product?.title}
            </div>  
            <div className='product-info-detail-content'>
              {product?.content}
            </div>
            <div>
              {
                originalPrice === 0
                  ? "무료"
                  : product?.onSale === true
                    ?(
                      <>
                        <span className="discountRate">{product?.discountRate}%</span>
                        <span className="original-price">₩{(originalPrice || 0).toLocaleString('ko-KR')}</span>
                        <span className="discounted-price"> ₩{(discountedPrice || 0).toLocaleString('ko-KR')}</span>
                      </>
                    )
                    : `₩${(originalPrice || 0).toLocaleString('ko-KR')}`
              }
            </div>
            <div className='product-info-btn-container'>
              <button className='buy-button'>지금 구매</button>
              <button className='cart-button'>장바구니 담기</button>
            </div>
            <div className='company-info-container'>
              <div>개발사</div>
              <div>{product?.developer}</div>
            </div>
            <div className='company-info-container'>
              <div>퍼블리셔</div>
              <div>{product?.publisher}</div>
            </div>
            <div className='company-info-container'>
              <div>출시일</div>
              <div>{product?.releaseDate}</div>
            </div>
            <div className='company-info-container'>
              <div>플랫폼</div>
              <div>{product?.platForm}</div>
            </div>
          </Col>
        </Row>
        <SpecInfo/>
      </Container>
    </div>
  )
}

export default ProductDetailInfo