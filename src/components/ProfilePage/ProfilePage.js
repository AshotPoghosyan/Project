import React from 'react';
import Header from './Header';
import Products from './Products/Products';


export default function ProfilePage() {

  let products = JSON.parse(localStorage.getItem('Products'));

  let name, description, category, price;
  const getProducts = products ? products.map((product, i) => { return (
    name = product.name,
    description = product.description,
    category = product.category,
    price = product.price,
    <Products key = {i} name={name} description={description} category={category} price={price} /> )}) : ""

  return (
    <div>
      <Header />
      <h1 className="titleStyle">Profile Page</h1>
      <div className="productStyle">{getProducts}</div>
    </div>
  );
}

