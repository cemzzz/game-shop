import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({item}) => {
  const originalPrice = item?.price; // 원래 가격
  const discountedPrice = originalPrice - (originalPrice * (item?.discountRate / 100)); // 할인 가격
  
  const navigate = useNavigate()
  const goDetailProduct = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div>
        <div className='card-container' onClick={goDetailProduct}>
            <img className='card-img' src={item?.img} alt={item?.title}/>
            <div className='card-title'>{item?.title}</div>
            <div className='card-price'>
            {
                originalPrice === 0
                    ? "무료"
                    : item?.onSale === true
                        ? (
                            <>
                                <span className="discountRate">{item?.discountRate}%</span>
                                <span className="original-price">₩{originalPrice.toLocaleString('ko-KR')}</span>
                                <span className="discounted-price"> ₩{discountedPrice.toLocaleString('ko-KR')}</span>
                            </>
                        ) 
                        : `₩${originalPrice.toLocaleString('ko-KR')}`
            }
            </div>
            <div className='card-adult'>
                {item?.adult === true ? "성인 등급" : ""}
            </div>
        </div>
    </div>
  )
}

export default ProductCard