import { useState } from "react";
import { useAppSelector } from "../../hooks/redux-hook";
import { IProduct } from "../../interfaces/product";
import { Product } from "./Product";

export const Products = () => {
    const products = useAppSelector(state => state.products)
    return (
        <div className="products">
            {
                products.map(el => (
                    <Product key={el.id} {...el}/>
                ))
            }
        </div>
    )
}