import { createSlice } from "@reduxjs/toolkit";
import { RiBookReadLine } from "react-icons/ri";

const initialState=[];

export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        loadProducts:(state,action)=>{
            return action.payload;
        },
        approveStatus:(state,action)=>{
            const product=state.find(p=>p.id===action.payload);
            console.log(product);
            if(product){
                product.isApprove=true;
            }
        },
        markMissing:(state,action)=>{
            console.log(action)
            const product=state.find(p=>p.id===action.payload.productId);
            if(product){
                if(action.payload.string ==='yes'){
                    product.isMissing.isNormal=false;
                    product.isMissing.isUrgent=true;
                }
                if(action.payload.string ==='no'){
                    product.isMissing.isUrgent=false;
                    product.isMissing.isNormal=true;
                }
            }
        },
    }
})

export const {loadProducts,approveStatus,markMissing}=productSlice.actions;
export default productSlice.reducer;