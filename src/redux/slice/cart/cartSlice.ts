import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/product';

const initialState = [
  {
    name: 'One',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '1',
    category: 't-shirt',
    count: 1,
  },
];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action): void {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
