import React from 'react'
import { useDispatch, useSelector } from 'react-redux'; 
import './CartInfo.css';
import { Col, Container, Row } from 'react-bootstrap'
import { REMOVE_FROM_CART } from '../redux/store'; 

const CartInfo = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

   // 총 가격 계산
  const totalPrice = cartItems.reduce((total, item) => {
    const originalPrice = item.price;
    const discountedPrice = originalPrice - (originalPrice * (item.discountRate / 100));
    return total + (item.onSale ? discountedPrice : originalPrice);
  }, 0);

  const handleRemoveItem = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: { id } }); 
  };

  return (
    <div>
        <Container>
            <h2>나의 장바구니</h2>
            <Row>
                <Col>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                        <div lg={9} key={item.id} className='cart-info-container'>
                            <img 
                                className='cart-game-img'
                                src={item.img} 
                                alt={item.title}
                            />
                            <div className='cart-game-info-area'>
                                <div className='cart-game-title-area'>
                                    <div className='cart-game-title'>{item.title}</div>
                                    <div className='cart-game-price'>
                                        ₩{item.onSale 
                                            ? (item.price - (item.price * (item.discountRate / 100))).toLocaleString('ko-KR') 
                                            : item.price.toLocaleString('ko-KR')}
                                        {item.onSale && (
                                        <>
                                            <span className="original-price">
                                            (₩{item.price.toLocaleString('ko-KR')})
                                            </span>
                                            <span className="discount-rate">
                                            ({item.discountRate}%)
                                            </span>
                                        </>
                                        )}
                                    </div>
                                </div>
                                <div className='cart-game-platform'>{item.platForm}</div>
                                <div 
                                    className='cart-game-delete'
                                    onClick={() => handleRemoveItem(item.id)}
                                >
                                    제거
                                </div>
                            </div>
                        </div>
                   
                    ))
                    ) : (
                    <div className='cart-no-notify'>장바구니에 담긴 제품이 없습니다.</div>
                )}
                </Col>
                <Col className='cart-buy-info-container' lg={3}>
                    <div className='cart-buy-info-title'>게임 및 앱 합계</div>
                    <div className='cart-buy-price-area'>
                        <div className='cart-buy-price-title'>가격</div>
                        <div className='cart-buy-price-content'>
                            ₩{totalPrice.toLocaleString('ko-KR')}
                        </div>
                    </div>
                    <div className='cart-buy-price-area'>
                        <div className='cart-buy-price-title'>세금</div>
                        <div className='cart-buy-price-content'>결제 시 정산됨</div>
                    </div>
                    <div className='cart-buy-underline'></div>
                    <div className='cart-buy-price-area'>
                        <div className='cart-buy-price-total-title'>소계</div>
                        <div className='cart-buy-price-total-content'>
                            ₩{totalPrice.toLocaleString('ko-KR')}
                        </div>
                    </div>
                    <button className='cart-buy-button'>구매하기</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartInfo