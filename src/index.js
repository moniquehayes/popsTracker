import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  Main  from './components/Main';

import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    </React.StrictMode>
)