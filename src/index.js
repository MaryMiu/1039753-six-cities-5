import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Offers = {
  COUNT: 312
};

ReactDOM.render(
    <App count={Offers.COUNT} />,
    document.querySelector(`#root`)
);
