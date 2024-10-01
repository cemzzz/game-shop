import { createStore } from 'redux';

// 초기 상태
const initialState = {
  cart: []
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// 리듀서
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // 장바구니에 동일한 아이템이 있는지 확인
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return state; // 이미 장바구니에 있으면 상태를 변경하지 않음
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

// 스토어 생성
export const store = createStore(cartReducer);
