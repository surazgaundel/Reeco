import { createSlice } from "@reduxjs/toolkit";
import { RiBookReadLine } from "react-icons/ri";

const initialState={
    allProducts:[],
    approveProducts:[],
};

export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        loadProducts:(state,action)=>{
            state.allProducts=action.payload;
        },
        approveStatus:(state,action)=>{
            const product=state.allProducts.find(p=>p.id===action.payload);
            console.log(product);
            if(product){
                product.isMissing.isNormal=false;
                product.isMissing.isUrgent=false;
                product.isApprove=true;
            }
        },
        markMissing:(state,action)=>{
            const product=state.allProducts.find(p=>p.id===action.payload.productId);
            if(product){
                if(action.payload.string ==='yes'){
                    product.isApprove=false;
                    product.isMissing.isNormal=false;
                    product.isMissing.isUrgent=true;
                }
                if(action.payload.string ==='no'){
                    product.isApprove=false;
                    product.isMissing.isUrgent=false;
                    product.isMissing.isNormal=true;
                }
            }
        },
        updateChanges:(state,action)=>{
            const { productId, tempPrice, tempQuantity } = action.payload;
            const productIndex = state.allProducts.findIndex((p) => p.id === productId);
            console.log(productIndex);
            if (productIndex !== -1) {
            // const previousPrice=state.allProducts[productIndex].price;
            // const previousQuantity=state.allProducts[productIndex].quantity;
            state.allProducts[productIndex].price = tempPrice;
            state.allProducts[productIndex].quantity = tempQuantity;
            }
        },
        updatePrice:(state,action)=>{
            
        }
    }
})

export const {loadProducts,approveStatus,markMissing,updateChanges,previousPrice,previousQuantity}=productSlice.actions;
export default productSlice.reducer;