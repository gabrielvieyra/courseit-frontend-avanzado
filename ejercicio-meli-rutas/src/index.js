import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductMeli from "./pages/ProductMeli/ProductMeli";

import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/producto/:site" component={Products} />
        {/*<Route exact path="/producto/:id" component={ProductMeli} />*/}
    </Router>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
