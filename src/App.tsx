import { Shop } from './pages/Shop';
import { Route, Routes, useParams } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import {Product} from './pages/Product';
import { MainLayout } from './layout/MainLayout';

export const App = () => {
  const {productId} = useParams();
  return (
    <MainLayout>
      <main>
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='shop/:productId' element={<Product/>} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </main>
    </MainLayout>
  );
};
