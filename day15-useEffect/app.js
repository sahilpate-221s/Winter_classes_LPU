import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/Homepgae";
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router';
import DummyTodos from './src/pages/dummyTodos';

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>    
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <DummyTodos />
        </BrowserRouter>
    );
};

reactRoot.render(<App />);
