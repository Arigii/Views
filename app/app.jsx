import { createRoot } from "react-dom/client";
import React from "react";
import Header from "./components/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(
    document.getElementById("app")
)
    .render(
        <Header />
    );