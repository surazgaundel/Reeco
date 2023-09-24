/* eslint-disable react/prop-types */
import React from 'react'
import {RxCross1} from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { markMissing} from "../features/update/productSlice";

export default function MissingModal({name,modal,handleModal,id}) {
  const dispatch=useDispatch();

  const handleMarkMissing = (productId,string) => {
    dispatch(markMissing({productId,string}));
    handleModal();
    };
  return (
    <div className={`modal-overlay ${modal && 'show-modal'}`}>
        <div className='modal-container'>
        <h2>Missing product</h2>
        <p>Is {name&& name.substring(0,50)}... urgent?</p>
        <section className='decision-modal'>
            <button onClick={()=>handleMarkMissing(id,'no')}>No</button>
            <button onClick={()=>handleMarkMissing(id,'yes')}>Yes</button>
        </section>
        <section className='modal-cross' onClick={handleModal}><RxCross1/></section>
        </div>
    </div>
  )
}
