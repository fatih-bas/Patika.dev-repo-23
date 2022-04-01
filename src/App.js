import React from 'react'
import './App.css';
import Header from './components/Header';
import PriceBar from './components/PriceBar';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <Header/>
      <PriceBar/>
      <ProductList/>
    </div>
      
    
  );
}

export default App;
