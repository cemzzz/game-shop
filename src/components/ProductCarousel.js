import React, { useEffect, useRef, useState, useCallback} from 'react'
import './ProductCarousel.css';
import { Col, Container, Row } from 'react-bootstrap';

const Carousel = ({sortedProduct}) => {
  const [mainImage, setMainImage] = useState(sortedProduct[0]?.img || "") //메인 이미지 상태 설정
  const [currentIndex, setCurrentIndex] = useState(0);  // 현재 인덱스를 관리
  const timeoutRef = useRef(null); // 타임아웃 레퍼런스 관리

  const originalPrice = sortedProduct[currentIndex]?.price || 0; 
  const discountedPrice = originalPrice - (originalPrice * (sortedProduct[currentIndex]?.discountRate / 100)); // 할인 가격

  // 타이머 초기화 및 재설정
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존 타이머 제거
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % sortedProduct.length; // 다음 인덱스 계산
        setMainImage(sortedProduct[nextIndex].img); // 메인 이미지 업데이트
        return nextIndex; // 현재 인덱스 반환
      });
    }, 5000); // 5초 후 다음 이미지로 전환
  }, [sortedProduct]);

  //서브 이미지 클릭 시 메인 이미지로 출력
  const subImageClick = (imgUrl) => {
    setMainImage(imgUrl);
    setCurrentIndex(sortedProduct.findIndex(product => product.img === imgUrl)); // 클릭한 이미지의 인덱스를 업데이트
    resetTimeout()
  }

  //자동 슬라이드
  useEffect(() => {
    if (sortedProduct.length === 0) return;
    // setMainImage(sortedProduct[0].img);

    if (!mainImage) {
      setMainImage(sortedProduct[0].img);
    }

    resetTimeout(); // 컴포넌트 마운트 시 타이머 설정

    return () => clearTimeout(timeoutRef.current); // 컴포넌트 언마운트 시 타이머 정리
  }, [sortedProduct, resetTimeout, mainImage]);

  // 상태값이 업데이트될 때마다 타이머 초기화
  useEffect(() => {
    resetTimeout(); // 상태값이 변경될 때마다 타이머 초기화
  }, [currentIndex, resetTimeout]);
  
  return (
    <div>
      <Container className='carousel-container'>
        <Row>
          <Col lg={8} md={12} sm={12}>
            <div className='carousel-main'>
              <img className='carousel-main-img' src={mainImage} alt='' />
              <div className='carousel-main-info'>
                <div className='main-title'> {sortedProduct[currentIndex]?.title} </div>
                <div className='main-price-info'> 
                  {
                    originalPrice === 0
                    ? "무료"
                    : sortedProduct[currentIndex]?.onSale === true
                        ? (
                            <>
                                <span className="discountRate">{sortedProduct[currentIndex]?.discountRate}%</span>
                                <span className="main-original-price">₩{originalPrice.toLocaleString('ko-KR')}</span>
                                <span className="main-discounted-price"> ₩{discountedPrice.toLocaleString('ko-KR')}</span>
                            </>
                        ) 
                        : `₩${originalPrice.toLocaleString('ko-KR')}`
                  } 
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} className='d-none d-lg-block'>
            <div className='carousel-sub'>
              {sortedProduct.map((sorted, index) => (
                <div 
                  key={sorted.id} 
                  className={`carousel-sub-container ${index === currentIndex ? 'selected' : ''}`}
                  onClick={()=>subImageClick(sorted.img)}
                >
                  <img className='carousel-sub-img' src={sorted.img} alt={sorted.title} />
                  <div className='carousel-sub-title'>{sorted.title}</div>
                </div>
              ))}      
            </div>
          </Col>
        </Row>
        <div className='d-block d-lg-none text-center carousel-indicators'>
          {sortedProduct.map((sorted, index) => (
            <span
              key={sorted.id}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => subImageClick(sorted.img)}
            />
          ))}
        </div>
      </Container>

    </div>
  )
}

export default Carousel