import { memo } from 'react';
import { Menu } from '../components/navigation/Menu';
import { Routes } from '../components/navigation/Routes';
import { Products } from '../components/product/Products';

export const Shop = memo(() => {
  return (
    <section>
      <Menu />
      <Routes />
      <Products />
    </section>
  );
});
