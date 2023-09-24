/* eslint-disable react/prop-types */
import {useState} from 'react'
import { formatPrice, totalAmount } from '../utils/helper'
import MissingModal from './MissingModal';
import EditModal from './EditModal';
import  Status  from './Status';

export default function Item({id,image,name,brand,quantity,price,isApprove,isMissing}) {

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
      <p>{formatPrice(price)} /6+1LB</p>
      {/* quantity */}
      <p><span className="quantity-info">{quantity}</span> x  6 + 1LB</p>
      {/* total */}
      <p>{formatPrice(totalAmount(price,quantity))}</p> 
      <Status 
      handleModal={handleModal} 
      handleEModal={handleEModal} 
      id={id} 
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
    {/* <EditModal
      name={name} 
      image={image} 
      brand={brand} 
      eModal={eModal} 
      handleModal={handleEModal}
    /> */}
    </>
  )
}
