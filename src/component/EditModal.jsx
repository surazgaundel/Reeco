import React from 'react'
import { changeReason } from '../utils/data';
import {RxCross1} from 'react-icons/rx';
import { formatPrice } from '../utils/helper';
import {IoMdAdd} from 'react-icons/io'
import {RiSubtractFill} from 'react-icons/ri';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from '../features/counter/counterSlice';


export default function EditModal({name,image,eModal,brand,price,quantity,total,handleModal}) {

    const count=useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    return (
    <div className={`modal-overlay ${eModal && 'show-modal'}`}>
        <div className='edit-modal-container'>
            <section>
                <h2>{name&& name.substring(0,70)}...</h2>
                <h3>{brand}</h3>
            </section>
            <section className='edit-modal' >
            <img src={image} alt={name} height={150} width={150}/>
            <section className='edit-change'>
                <label><span>Price:</span>
                    <input type="number" name="price" className="price-info" value={price}/>&nbsp;/6 *1LB
                </label>
                <label>Quantity:&emsp;
                    <button 
                    className='update-button'
                    onClick={()=>dispatch(decrement())}
                    ><RiSubtractFill/></button>
                    <input type="number" name="quantity" value={count}/>
                    <button 
                    className='update-button'
                    onClick={()=>dispatch(increment())}
                    ><IoMdAdd/></button>
                     &nbsp;x6 *1LB
                </label>
                <p>Total:<span>{formatPrice(1999)}</span></p>
            </section>
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
            <button className='light-button'>Cancel</button>
            <button className='focus-button'>Send</button>
        </section>
        </div>
        <section className='edit-modal-cross' onClick={handleModal}><RxCross1/></section>
    </div>
  )
}
