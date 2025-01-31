import React from "react";
import ReactDOM from "react-dom/client";
import DummyTodos from './src/pages/dummyTodos';

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (
<>
            <DummyTodos />
</> 
    );
};

reactRoot.render(<App />);
