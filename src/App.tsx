import { Shop } from "./pages/Shop";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./pages/Contacts";

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes>
  );
}