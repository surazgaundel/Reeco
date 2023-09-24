import React from 'react'
import Product from './Product'
import { productHeader } from '../utils/data';
import Search from './Search';
import { useSelector } from 'react-redux';

export default function Products() {
  const allProducts=useSelector((state)=>state.products);

  return (
    <div className="container product-container">
      <Search/>
      <div className="products-header">
        {productHeader.map(header=>{
          return(
            <p key={header.id}>{header.name}</p>
          )
        })}
      </div>
      <div className="product-list">
        {
          allProducts.map((item) =>{
            return(
              <Product key={item.id} {...item}/>
              )
            })
          }
        </div>
      </div>
  )
}
