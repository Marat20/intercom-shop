import { Link } from 'react-router-dom';
import { IconBasket, IconSearch } from '../../media/svg/icons';

export const HeaderTop = () => {
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
            <IconSearch/>
          </div>
          <div>
            <IconBasket/>
          </div>
        </nav>

        {/* Name of store */}
        <div>
          <a href=''>LOGO</a>
        </div>
      </div>
    </header>
  );
};
