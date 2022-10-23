import { Link } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <nav>
        <Link to='/shop'>магазин</Link>
        <span>{'>'}</span>
        <span></span>
      </nav>
    </div>
  );
};
