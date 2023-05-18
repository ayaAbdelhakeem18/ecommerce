import "./App.css";
import { useEffect, useState } from "react";
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

function App() {
  let [categories,setcategories]=useState();
  const [data, setData] = useState();
  const [products, setproducts] = useState();

  useEffect(() => {
    axios
      .get("/api.json")
      .then(function (response) {
        var products = response.data.slice(0, 50);
        var groupedData = {};

        for (var i = 0; i < products.length; i++) {
          var product = products[i];
          var brand = product.brand;

          if (groupedData.hasOwnProperty(brand)) {
            groupedData[brand].push(product);
          } else {
            groupedData[brand] = [product];
          }
        }
        const brandArray = Object.entries(groupedData).map(
          ([brandName, products]) => {
            const { image_link, description } = products[0];
            return {
              brandName,
              image: image_link,
              description,
              productList: products,
            };
          }
        );
        const filteredObject = products.reduce((result, item) => {
          const { category, ...rest } = item;
          if (category !== "mostViewed" && category !== "editorPicks" && category !== "topSellings") {
            return result;
          }
          return { ...result, [category]: [...(result[category] || []), rest] };
        }, {});
        setproducts(products);
        setcategories(filteredObject);
        setData(brandArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <BrowserRouter>
      <CartProvider>
        {data && categories ? (
          <div className="App">
            <NaV />
            <Routes>
              <Route
                path="/"
                exact
                element={<Home/>}
              />
              <Route path="/gallerie" element={<Gallery products={products}/>}/>
              <Route
                path="/collection"
                element={<Collection brands={data} />}
              />
              {data.map((elle, i) => {
                let name = elle.brandName.replace(" ", "_");
                return (
                  <Route
                    key={elle.brandName}
                    path={`/collection/${name}_products`}
                    element={
                      <Products_page brand={data[i]} key={elle.brandName} />
                    }
                  />
                );
              })}
              {content.category.map((elle) => {
                let obj =
                  elle.name === "Most Viewed"
                    ? {link :"/mostViewed",list:categories.mostViewed}
                    : elle.name == "Editor picks"
                    ?{link :"/editorPicks",list:categories.editorPicks}
                    : {link :"/topSellings",list:categories.topSellings};
                return <Route path={obj.link} element={<TopProducts name={elle.name} list={obj.list}/>}></Route>;
              })}
            </Routes>
            <Footer/>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
