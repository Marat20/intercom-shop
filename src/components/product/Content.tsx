import { Navigation } from '../navigation/Navigation';
import { Routes } from '../navigation/Routes';
import { Products } from './Products';

export const Content = () => {
  return (
    <section>
      <Navigation />
      <Routes />
      <Products />
    </section>
  );
};
