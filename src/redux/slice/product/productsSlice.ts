import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../../interfaces/product';

const initialState: IProduct[] = [
  {
    name: 'One',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '1',
    category: 't-shirt',
  },
  {
    name: 'Two',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '2',
    category: 'jacket',
  },
  {
    name: 'Three',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '3',
    category: 'jeans',
  },
  {
    name: 'Four',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '4',
    category: 'shoes',
  },
  {
    name: 'Three',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '5',
    category: 'jeans',
  },
  {
    name: 'Three',
    image: 'Alt',
    description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    price: 3000,
    id: '6',
    category: 'jeans',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action): void {
      state = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
