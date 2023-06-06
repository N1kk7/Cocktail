import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/mediaScreen.scss';
import App from './App';
import store from './redux'
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Provider>
);
