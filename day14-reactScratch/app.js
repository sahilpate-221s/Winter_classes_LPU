import React from 'react';
import ReactDOM from 'react-dom/client';
// import Dashboard from './src/pages/Dashboard';
import Youtube from './src/pages/Youtube';

const domRoot = document.getElementById('dom-root');
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    return(
        <React.Fragment>
            <Youtube />
        </React.Fragment>
    );
};
reactRoot.render(<App />);
