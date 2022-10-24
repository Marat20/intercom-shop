import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';
import { IconDelete } from '../../media/svg/icons';

export const CartModalProducts = (props: IProduct) => {
  const { id, name, price, count, image } = props;
  const [countItem, setCountItem] = useState(count);

  const increment = () => {
    setCountItem((prev) => prev + 1);
  };

  const decrement = () => {
    if (countItem > 1) {
      setCountItem((prev) => prev - 1);
    } else {
      return;
    }
  };

  return (
    <div className='cart-modal-products-body'>
      <div className='cart-modal-products'>
        <div className='cart-modal-products-image'>
          <Link to={`shop/${id}`}>
            <img src={image} />
          </Link>
        </div>
        <div className='cart-modal-products-pane'>
          <div className='cart-modal-products-info'>
            <Link to={`shop/${id}`}>
              <span>{name}</span>
            </Link>
            <div>
              <IconDelete />
            </div>
          </div>
          <div className='cart-modal-products-total'>
            <div className='cart-modal-products-input'>
              <span className='cart-modal-icon' onClick={decrement}>
                -
              </span>
              <input type='text' value={countItem} />
              <span className='cart-modal-icon' onClick={increment}>
                +
              </span>
            </div>
            <span>{price} руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
