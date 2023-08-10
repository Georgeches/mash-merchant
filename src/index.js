import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import App from "./App";
import "./index.css";

createRoot(document.getElementById('root')).render(
    <App />
);
