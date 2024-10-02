import React from "react";
import ReactDOM from "react-dom/cliens";
import App from "./App.jsx";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider>
    <App/>
   </Provider>
);

ReportWebVitals();