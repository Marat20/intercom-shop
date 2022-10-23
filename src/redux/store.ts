import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice/cart/cartSlice';
import productsReducer from './slice/product/productsSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>