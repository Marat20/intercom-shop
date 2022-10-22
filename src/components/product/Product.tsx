import { IProduct } from '../../interfaces/product';
import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Product = memo((props: IProduct) => {
  const { image, name, price, id } = props;
  return (
    <figure className='product'>
      <Link to={`/shop/${id}`}>
        <img alt={image} />
        <figcaption>{name}</figcaption>
        <p>{price}</p>
      </Link>
    </figure>
  );
});
