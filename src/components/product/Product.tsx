import { IProduct } from "../../interfaces/product";
import { memo } from "react";

export const Product = memo((props: IProduct) => {
    const {image, name, price} = props;
    return (
        <div>
            <figure>
                <img />
                <figcaption>{name}</figcaption>
                <p>{price}</p>
            </figure>
        </div>
    )
})