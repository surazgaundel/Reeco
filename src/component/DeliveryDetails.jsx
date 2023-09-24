import React from 'react'
import { orderCategory } from '../utils/data'
import { getDate } from '../utils/helper';

export default function DeliveryDetails() {
  return (
    <div className="container">
      <div className="details-container">
        <section>
          <p>Supplier</p>
          <h1>East coast fruits & vegetables</h1>
        </section>
        <div className='vertical-line'></div>
        <section>
          <p>Shipping Date</p>
          <h1>{getDate()}</h1>
        </section>
        <div className='vertical-line'></div>
        <section>
          <p>Total</p>
          <h1>$15,025.3</h1>
        </section>
        <div className='vertical-line'></div>
        <section>
          <p>Category</p>
          <section className='order-category'>
            {orderCategory.map(category=>{
              const {id,name,icon}=category;
              return(
                <h6 key={`${id}${name}`}>{icon}</h6>
                )
              })}
            </section>
        </section>
        <div className='vertical-line'></div>
        <section>
          <p>Department</p>
          <h1>300-444-678</h1>
        </section>
        <div className='vertical-line'></div>
        <section>
          <p>Status</p>
          <h1>Waiting for Approval</h1>
        </section>
      </div>
    </div>
  )
}
