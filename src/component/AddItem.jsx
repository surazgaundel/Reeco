import React from 'react'
import {RxCross1} from 'react-icons/rx';

export default function AddItem({addModal,handleAddModal}) {



  return (
    <div className={`modal-overlay ${addModal && 'show-modal'}`}>
        <div className='modal-container add-container'>
        <h2>Add New Item</h2>
        <form>

        </form>
    <section className='add-item-cross' onClick={handleAddModal}><RxCross1/></section>
    </div>
    </div>
  )
}
