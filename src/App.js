import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
