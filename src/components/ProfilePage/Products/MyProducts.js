import React from 'react';
import { useLocation } from 'react-router-dom'
import Header from '../Header';
import CreateProducts from './CreateProducts';
import Products from './Products';


export default function MyProducts(props) {
  const [data, setData] = React.useState(null);
  const onSave = (item) => setData(item)

  const location = useLocation();
  const pathName = location.pathname.split(':')[1]


  let products = JSON.parse(localStorage.getItem('Products'));
  let myProducts = products ? products.filter(prod => prod.id === pathName) : ""

  
  let name, description, category, price;
  const getMyProducts = products ? myProducts.map((product, i) => { return (
      name = product.name,
      description = product.description,
      category = product.category,
      price = product.price,
      <Products key={i} name={name} description={description} category={category} price={price} /> )}) : ""

    return (
      <div> 
          <Header />
          <CreateProducts onSave={onSave}/>
          <h1 className = "titleStyle">MyProducts</h1>
          {data ? <Products name={data.name} description={data.description} category={data.category} price={data.price} id={data.id}   /> : ''}
          <div className="productStyle">{getMyProducts}</div>
      </div>
    );
  }
  
  