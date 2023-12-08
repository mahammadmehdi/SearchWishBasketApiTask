import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasketProvider from './Context/BasketContext';
import WishlistProvider from './Context/WishlistContext';
import SearchProvider, { SearchContext } from './Context/SearchContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
    <WishlistProvider>
    <BasketProvider>
    <App />
    </BasketProvider>
    </WishlistProvider>
    </SearchProvider>
  </React.StrictMode>
);


