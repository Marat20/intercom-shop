import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces/product";

const initialState: IProduct[] = [];

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct(state, action): void {
            state.push(action.payload)
        }
    }
})

const {addProduct} = basketSlice.actions;
export default basketSlice.reducer;