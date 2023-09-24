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
                product.message='Approved'
            }
        },
        markMissing:(state,action)=>{
            const product=state.allProducts.find(p=>p.id===action.payload.productId);
            if(product){
                if(action.payload.string ==='yes'){
                    product.isApprove=false;
                    product.isMissing.isNormal=false;
                    product.isMissing.isUrgent=true;
                    product.message='Missing-Urgent'
                }
                if(action.payload.string ==='no'){
                    product.isApprove=false;
                    product.isMissing.isUrgent=false;
                    product.isMissing.isNormal=true;
                    product.message='Urgent';
                }
            }
        },
        updateChanges:(state,action)=>{
            const { productId, tempPrice, tempQuantity } = action.payload;
            const productIndex = state.allProducts.findIndex((p) => p.id === productId);

            if (productIndex !== -1) {
                const previousPrice=state.allProducts[productIndex].price;
                const previousQuantity=state.allProducts[productIndex].quantity;
                const previousTotal=previousPrice*previousQuantity;

                if(tempPrice===0){
                    state.allProducts[productIndex].price = previousPrice;
                }
                if(tempQuantity===0){
                    state.allProducts[productIndex].quantity = previousQuantity;
                }
                if(tempPrice>0){
                    state.allProducts[productIndex].price = tempPrice;
                }
                if(tempQuantity>0){
                    state.allProducts[productIndex].quantity = tempQuantity;
                }

                const newPrice=state.allProducts[productIndex].price;
                const newQuantity=state.allProducts[productIndex].quantity;

                if(previousPrice!==newPrice && previousQuantity!==newQuantity){
                    state.allProducts[productIndex].isApprove = true;
                    state.allProducts[productIndex].message='Price & Quantity updated';
                    state.allProducts[productIndex].prevPrice=previousPrice;
                    state.allProducts[productIndex].prevQuantity=previousQuantity;
                    state.allProducts[productIndex].prevTotal=previousTotal;
                    
                }else if(previousPrice !== newPrice){
                    state.allProducts[productIndex].isApprove = true;
                    state.allProducts[productIndex].message='Price-updated';
                    state.allProducts[productIndex].prevPrice=previousPrice;
                    state.allProducts[productIndex].prevTotal=previousTotal;
                } else if(previousQuantity !== newQuantity){
                    state.allProducts[productIndex].isApprove = true;
                    state.allProducts[productIndex].message='Quantity-updated';
                    state.allProducts[productIndex].prevQuantity=previousQuantity;
                    state.allProducts[productIndex].prevTotal=previousTotal;
                }
            }
        },
    }
})

export const {loadProducts,approveStatus,markMissing,updateChanges,updatePrice}=productSlice.actions;
export default productSlice.reducer;