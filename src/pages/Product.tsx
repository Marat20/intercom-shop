import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hook";

export const Product = () => {
    const {productId} = useParams();
    const products = useAppSelector(state => state.products);
    
    return (
        <>
            <h1>{productId}</h1>
        </>
    )
}