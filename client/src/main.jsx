import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Provider } from "react-redux";
// 2. Import your configured store
import { store } from "./app/store"; // Assuming your store is defined in './app/store.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./index.css";
import Products from "./components/Products";
import AddProduct from "./components/addproduct";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element= {<Products />} />
          <Route path="/products" element= {<Products />} />
          <Route path="/addproduct" element= {<AddProduct />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
