import React from 'react';
import Header from '../Header';
import Button from '@material-ui/core/Button';
import ProductDialog from './Products';


export default function MyProducts() {

    return (
      <div> 
          <Header />
          <h1>MyProducts</h1>
          <ProductDialog />
      </div>
    );
  }
  
  