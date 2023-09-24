/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {RxCross1} from 'react-icons/rx';
import {TiTick} from 'react-icons/ti';
import {useDispatch } from 'react-redux';
import { approveStatus} from "../features/update/productSlice";

export default function Status({handleModal, handleEModal,id,isApprove,isMissing}) {
    const dispatch=useDispatch();

    const handleApproveStatus = (productId) => {
        dispatch(approveStatus(productId));
    };

    const {isNormal,isUrgent}=isMissing;

    return (
    <div className="status-info">
        <span className={`main-status ${isApprove ?`is-approve`:isUrgent?`is-urgent-missing`:isNormal?'is-missing':''}`}>
            {isApprove?'Approved':isUrgent?'Missing-Urgent':isNormal?'Missing':''}
        </span>
        <button 
        style={{color:isApprove ? 'green' :''}}
        onClick={()=>handleApproveStatus(id)}
        >
            <TiTick />
        </button>
        <button
        style={{color:isUrgent?'red':isNormal?'orange':''}} 
        onClick={handleModal}><RxCross1/></button>
        <button 
        onClick={handleEModal}>Edit</button>
    </div>
    )
}