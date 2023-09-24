import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx';

export default function MissingModal({name,modal,handleModal}) {

  return (
    <div className={`modal-overlay ${modal && 'show-modal'}`}>
        <div className='modal-container'>
        <h2>Missing product</h2>
        <p>Is {name&& name.substring(0,50)}... urgent?</p>
        <section className='decision-modal'>
            <button>No</button>
            <button>Yes</button>
        </section>
        <section className='modal-cross' onClick={handleModal}><RxCross1/></section>
        </div>
    </div>
  )
}
