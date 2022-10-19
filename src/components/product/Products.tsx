import { useState } from "react";
import { Product } from "./Product";

const arr = [
    {
        name: 'One',
        image: 'Alt',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        price: 3000,
        id: 1
    },
    {
        name: 'Two',
        image: 'Alt',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        price: 3000,
        id: 2
    },
    {
        name: 'Three',
        image: 'Alt',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        price: 3000,
        id: 3
    },
    {
        name: 'Four',
        image: 'Alt',
        description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem',
        price: 3000,
        id: 4
    }
]

export const Products = () => {
    const [products, setProducts] = useState(arr);
    return (
        <div>
            {
                products.map(el => (
                    <Product key={el.id} {...el}/>
                ))
            }
        </div>
    )
}