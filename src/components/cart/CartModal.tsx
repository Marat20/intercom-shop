import { useAppSelector } from "../../hooks/redux-hook";
import { CartModalItem } from "./CartModalItem";

export const CartModal = () => {
  const cart = useAppSelector(state => state.cart);

  return (
    <aside>
      <div className='cart-top'>
        <p>Ваши товары:</p>
        <button>X</button>
      </div>
      <div className="cart-products">
        {
          cart.length > 0 ? cart.map(el => <CartModalItem key={el.id} {...el}/>) : <span>Корзина пуста...</span>
        }
      </div>
    </aside>
  );
};
