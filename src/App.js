import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import './bootstrap.min.css'
import Details from './pages/Details';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
