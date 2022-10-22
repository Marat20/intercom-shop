import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './slice/basket/basketSlice';
import productsReducer from './slice/product/productsSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        products: productsReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>