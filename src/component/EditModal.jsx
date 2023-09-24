import React, { useState } from 'react'
import { changeReason } from '../utils/data';
import {RxCross1} from 'react-icons/rx';
import { formatPrice, totalAmount } from '../utils/helper';
import {IoMdAdd} from 'react-icons/io'
import {RiSubtractFill} from 'react-icons/ri';
import {useDispatch} from 'react-redux';
import { updateChanges } from '../features/update/productSlice';
import { increment,decrement } from '../features/counter/counterSlice';



export default function EditModal({name,image,id,eModal,brand,handleModal}) {
    const dispatch = useDispatch();

    const [tempPrice,setTempPrice]=useState(null);
    const [tempQuantity,setTempQuantity]=useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleEdit=(productId,tempPrice,tempQuantity)=>{
        dispatch(updateChanges({productId,tempPrice,tempQuantity}));
        handleModal();
        setTempPrice(null)
        setTempPrice(null)
    }
    
    const handleTempPrice = (e) => {
        const price = parseFloat(e.target.value) || 0;
        if(price>0){
            setTempPrice(price);
            setTotalPrice(totalAmount(price, tempQuantity));
        }
      };
    
      const handleTempQuantity = (e) => {
        const quantity = parseFloat(e.target.value) || 0;
        if(quantity>0){
            setTempQuantity(quantity);
            setTotalPrice(totalAmount(tempPrice, quantity));
        }
      };

      
    
    return (
    <div className={`modal-overlay ${eModal && 'show-modal'}`}>
        <div className='edit-modal-container'>
            <section>
                <h2>{name&& name.substring(0,70)}...</h2>
                <h3>{brand}</h3>
            </section>
            <section className='edit-modal' >
            <img src={image} alt={name} height={150} width={150}/>
            <form className='edit-change'>
                <label><span>Price:</span>
                    <input type="number" name="price" className="price-info" min='0' step='1' value={tempPrice} onChange={handleTempPrice}/>&nbsp;/6 *1LB
                </label>
                <label>Quantity:&emsp;
                    <button 
                    className='update-button'
                    onClick={()=>dispatch(decrement())}
                    ><RiSubtractFill/></button>
                    <input type="number" name="quantity" value={tempQuantity} min='0' onChange={handleTempQuantity}/>
                    <button 
                    className='update-button'
                    onClick={()=>dispatch(increment())}
                    ><IoMdAdd/></button>
                     &nbsp;x6 *1LB
                </label>
                <p>Total:&emsp;&emsp;<span>{formatPrice(totalPrice)}</span></p>
            </form>
            </section>
        <section className='reason-modal'>
            <h3>Choose reason <span>(optional)</span></h3>
            <section className='reason-list'>
                {
                    changeReason.map(({id,reason})=>{
                        return(
                            <p key={id} className='reason-info'>{reason}</p>
                        )
                    })
                }  
            </section>
        </section>
        <section className='decision-button'>
            <button className='light-button' onClick={handleModal}>Cancel</button>
            <button className='focus-button' type='submit' onClick={()=>handleEdit(id,tempPrice,tempQuantity)}>Send</button>
        </section>
        <section className='edit-modal-cross' onClick={handleModal}><RxCross1/></section>
        </div>
    </div>
  )
}
