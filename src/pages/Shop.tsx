import { Menu } from '../components/navigation/Menu';
import { Routes } from '../components/navigation/Routes';
import { Products } from '../components/product/Products';

export const Shop = () => {
  return (
    <section>
      <Menu />
      <Routes />
      <Products />
    </section>
  );
};
