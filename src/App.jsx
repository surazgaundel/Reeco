import { useEffect } from 'react'
import { DeliveryDetails, NavBar, OrderHeader, Products } from './component'
import { useDispatch } from 'react-redux'
import { loadProducts } from './features/update/productSlice'
import { productsList } from './utils/data';


function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(loadProducts(productsList))
  },[])

  return (
    <>
    <NavBar/>
    <OrderHeader/>
    <DeliveryDetails/>
    <Products/>
    </>
  )
}

export default App
