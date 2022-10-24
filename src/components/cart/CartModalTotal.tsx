import { Link } from "react-router-dom";

export const CartModalTotal = (props: {price: number}) => {
    const price = props.price;
    
    return (
        <div className='cart-modal-products-footer'>
        <div className='cart-modal-products-footer-total'>
          <span>Заказ на сумму</span>
          <span>{price} руб.</span>
        </div>
        <Link to='shop/cart'><span className='cart-modal-products-footer-button' >Перейти в корзину</span></Link>
      </div>
    )
}