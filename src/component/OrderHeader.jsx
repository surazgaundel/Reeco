import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'


export default function OrderHeader() {
  const valueOrder='32457ABC'
  return (
    <div className="order-header">
      <div className='container'>
      <section className='order-dir'>
        <p>Orders<span><AiOutlineRight/></span></p>
        <p>Order {valueOrder}</p>
      </section>
      <div className='order-approval'>
        <h1>Order {valueOrder}</h1>
        <section className='order-button'>
          <button className='light-button'>Back</button>
          <button className='focus-button'>Approve Order</button>
        </section>
      </div>
      </div>
    </div>
  )
}
