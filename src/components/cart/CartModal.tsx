import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux-hook';
import { IconClose } from '../../media/svg/icons';
import { CartModalProducts } from './CartModalProducts';
import { CartModalTotal } from './CartModalTotal';

export const CartModal = (props: { visibleCart: boolean }) => {
  const cart = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const visibleCart = props.visibleCart;

  useEffect(() => {
    if (cart.length > 0) {
      cart.forEach((el) => {
        const price = el.price * el.count;
        setTotalPrice((prev) => prev + price);
      });
    }
  }, [cart]);

  return (
    <aside className={`cart-modal ${visibleCart ? 'is_visible' : ''}`}>
      <div className='cart-modal-top'>
        <p>Ваши товары:</p>
        <div><IconClose/></div>
      </div>
      {cart.length > 0 ? (
        cart.map((el) => <CartModalProducts key={el.id} {...el} />)
      ) : (
        <span>Корзина пуста...</span>
      )}
      <CartModalTotal price={totalPrice}/>
    </aside>
  );
};
