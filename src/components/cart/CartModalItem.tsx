import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product';

export const CartModalItem = (props: IProduct) => {
  const { id, name, price, count, image } = props;
  const [countItem, setCountItem] = useState(count);

    const increment = () => {
        setCountItem(prev => prev + 1)
    };

    const decrement = () => {
        if(countItem > 1) {
            setCountItem(prev => prev - 1)
        } else {
            return
        }
    };

  return (
    <>
    <div>
      <div>
        <Link to={`shop/${id}`}>
          <img src={image} />
        </Link>
      </div>
      <div>
        <div>
            <Link to={`shop/${id}`}>
              <span>{name}</span>
            </Link>
            <button>DELETE</button>
        </div>
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <input type="text" value={countItem}/>
                <button onClick={increment}>+</button>
            </div>
            <span>{price} руб.</span>
        </div>
      </div>
    </div>
    <div>
      <div>
        <span>Заказ на сумму</span>
        <span>{price}</span>
      </div>
      <button>Перейти в корзину</button>
    </div>
    </>
  );
};
