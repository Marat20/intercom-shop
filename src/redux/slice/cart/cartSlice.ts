import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/product";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action): void {
            state.push(action.payload)
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;