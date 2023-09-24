/* eslint-disable react/prop-types */
import {useState} from 'react'
import { formatPrice, totalAmount } from '../utils/helper'
import MissingModal from './MissingModal';
import EditModal from './EditModal';
import  Status  from './Status';
// import { UseSelector } from 'react-redux';
export default function Item({id,image,name,brand,quantity,price,isApprove,message,isMissing,prevPrice,prevQuantity,prevTotal}) {

  const [modal,setModal]=useState(false)
  const [eModal,setEModal]=useState(false)

  const handleModal=()=>{
    setModal(prev=>!prev);
  }
  const handleEModal=()=>{
    setEModal(prev=>!prev);
  }

  return (
    <>
    <div className="product">
      <section className="product-info">
        <img src={image} height={30} width={30} alt={`${id}${name}`}/>
        <p>{name}</p>
      </section>
      {/* brand name */}
      <p>{brand}</p>
      {/* price */}
      <p>
        {formatPrice(price)} /6+1LB
        <p className="prev-value">{prevPrice && prevPrice}</p>
      </p>
      {/* quantity */}
      <p>
        <span className="quantity-info">{Number(quantity)}</span> x  6 + 1LB
        <p className='prev-value'>{prevQuantity&&prevQuantity}</p>
      </p>
      {/* total */}
      <p>
        {formatPrice(totalAmount(price,quantity))}
        <p className='prev-value'>{prevTotal && prevTotal}</p>
      </p> 
      <Status 
      handleModal={handleModal} 
      handleEModal={handleEModal} 
      id={id} 
      message={message}
      isApprove={isApprove} 
      isMissing={isMissing} />
    </div>

    <hr className="horizontal-line"/>

    <MissingModal 
      name={name} 
      id={id}
      modal={modal} 
      handleModal={handleModal}
    />
    <EditModal
      name={name} 
      id={id}
      image={image} 
      brand={brand} 
      eModal={eModal} 
      handleModal={handleEModal}
    />
    </>
  )
}
