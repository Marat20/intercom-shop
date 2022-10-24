import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartModal } from '../../components/cart/CartModal';
import { IconCart, IconSearch } from '../../media/svg/icons';

export const HeaderTop = () => {
  const [visibleCart, setVisibleCart] = useState(false);

  const toggleVisibleCart = () => {
    setVisibleCart(!visibleCart);
  };

  return (
    <header className='header'>
      <div className='header-top'>
        <nav className='header-nav'>
          <ul className='header-list'>
            <li>
              <Link to='/shop'>МАГАЗИН</Link>
            </li>
            <li>
              <Link to='/contacts'>КОНТАКТЫ</Link>
            </li>
          </ul>
          <div className='icon'>
            <IconSearch />
          </div>
          <div className='icon' onClick={toggleVisibleCart}>
            <IconCart />
          </div>
        </nav>

        {/* Name of store */}
        <div>
          <a href=''>LOGO</a>
        </div>
      </div>
      <CartModal visibleCart={visibleCart} />
    </header>
  );
};
