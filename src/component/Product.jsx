import {useState} from 'react'
import { formatPrice } from '../utils/helper'
import {RxCross1} from 'react-icons/rx';
import {TiTick} from 'react-icons/ti';
import MissingModal from './MissingModal';
import EditModal from './EditModal';

export default function Item({id,image,name,brand,price}) {
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
      <p><span className="quantity-info">0</span> x  6 + 1LB</p>
      {/* total */}
      <p>{formatPrice(price)}</p> 
      <div className="status-info">
        <span className='main-status'>{`Approved`||``}</span>
        <button className=''><TiTick/></button>
        <button onClick={handleModal}><RxCross1/></button>
        <button onClick={handleEModal}>Edit</button>
      </div>
    </div>
    <hr className="horizontal-line"/>
    <MissingModal name={name} modal={modal} handleModal={handleModal}/>
    <EditModal
    name={name} image={image} brand={brand} eModal={eModal} handleModal={handleEModal}
    />
    </>
  )
}
