import React from 'react'
import Product from './Product'
import { productsList } from '../utils/data';
import Search from './Search';

export default function Products() {
  return (
    <div className="container product-container">
      <Search/>
      <div className="products-header">
      <p>Product name</p>
      <p>Brand</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Status</p>
      </div>
      <div className="product-list">
        {
          productsList.map((item) =>{
            return(
              <Product key={item.id}{...item}/>
              )
            })
          }
        </div>
      </div>
  )
}
