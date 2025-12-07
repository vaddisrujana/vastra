import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products';
import Wishlist from './components/Wishlist';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="row">
        <div className="col-lg-2 sidebar-container">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/login' exact element={<Login/>} />
            <Route path='/Registration' exact element={<Registration/>} />
            <Route path='/:category' exact element={<Products/>} />
            <Route path='/productdetails/:id' element={<ProductDetails/>} />
            <Route path='/Wishlist' exact element={<Wishlist/>} />
          </Routes>
        </div>
      </div>
      <Footer/>
      {/* <Products/> */}
    </BrowserRouter>
  );
}

export default App;
