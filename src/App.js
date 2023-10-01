import "./App.css";
import "./mediaQueries.css";
import React, { useEffect, useState } from "react";
import Home from "./Home page/Home";
import NaV from "./components/Nav";
import Products_page from "./pages/products_page";
import content from "./content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "../src/pages/collection";
import axios from "axios";
import { CartProvider } from "react-use-cart";
import TopProducts from "./pages/Top-products";
import Gallery from "./pages/gallerie";
import Footer from "./components/Footer";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Payment from "./pages/payment";
import Signup from "./pages/signup";
import Login from "./pages/login";
import StripeContainer from "./pages/stripeContainer";


export const Context = React.createContext();

function App() {
  const [categories,setcategories]=useState();
  const [brands, setBrands] = useState();
  const [loggedin,setloggedIn]=useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });


  const loginStatue = (data) => {
    setloggedIn(data);
  };
  const userInfo = (data) => {
    setUser(data);
  };

  const checkLocalStorage = () => {
    const savedLoggedin = localStorage.getItem('loggedin');
    const savedUser = localStorage.getItem('user');

    if (savedLoggedin !== null && savedUser !== null) {
      setloggedIn(JSON.parse(savedLoggedin));
      setUser(JSON.parse(savedUser));

      console.log(JSON.parse(savedUser));
      console.log(savedUser);
    }
  };
  useEffect(() => {
    checkLocalStorage();
    const fetchData = async () => {
      try {
        const data = await axios.get(`/api/DB.json`);
        setBrands(data.data.brands);
        const mostViewed = data.data.products.filter(product => product.category_id == 1);
        const editorPicks = data.data.products.filter(product => product.category_id == 2);
        const topSellings = data.data.products.filter(product => product.category_id == 3);
        setcategories({
          mostViewed: mostViewed,
          editorPicks: editorPicks,
          topSellings: topSellings,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider value={{loggedin:loggedin,user}}>
      <CartProvider>
        {brands && categories ? (
          <div className="App">
            <NaV logged={loginStatue} userInfo={userInfo} />
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/gallerie" element={<Gallery />}/>
              <Route path="/collection" element={<Collection brands={brands} />}/>
              
              {brands.map((elle,i)=>{
                return(
                  <Route key={i} path={`/${elle.name}_products`} element={<Products_page id={elle.id} heading={elle.name} description={elle.description}/>}></Route>
                )
              })}
              <Route path={'/mostViewed'} element={<TopProducts name={'Most Viewed'} list={categories.mostViewed}/>}></Route>
              <Route path={'/editorPicks'} element={<TopProducts name={'Editor picks'} list={categories.editorPicks}/>}></Route>
              <Route path={'/topSellings'} element={<TopProducts name={'Top Sellings'} list={categories.topSellings}/>}></Route>
              <Route
                path="/checkout"
                element={<Checkout />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
              <Route
                path="/payment"
                element={<StripeContainer />}
              />
              <Route
                path="/signup"
                element={<Signup logged={loginStatue} userInfo={userInfo}/>}
              />
              <Route
                path="/login"
                element={<Login logged={loginStatue} userInfo={userInfo}/>}
              />
            </Routes>
            <Footer/>
          </div>
        ) : (
          <>
          <NaV />
          <div class=" d-flex align-items-center justify-content-center" style={{height:"40vh"}}>
          <div class="spinner-border text-primary" role="status">
              <span class="sr-only">Loading...</span>
          </div>
          </div>
          <Footer/>
          </>
        )}
      </CartProvider>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
