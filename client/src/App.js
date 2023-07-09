import NavBar from './NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import MyAccount from './components/MyAccount';
import Login from './components/login';
import SignUp from './components/SignUp';
import CartComponent from './components/CartComponent';
function App() {
  const productId = 3;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = "/product-details/:id" element={<ProductDetails/>} ></Route>
          <Route path = "/account" element={<MyAccount/>} ></Route>
          <Route path = "/cart" element={<CartComponent />} ></Route>
          <Route path = "/login" element={<Login/>} ></Route>
          <Route path = "/signup" element={<SignUp/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
