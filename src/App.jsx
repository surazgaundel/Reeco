import { useState } from 'react'
import { DeliveryDetails, NavBar, OrderHeader, Products } from './component'
import Counter from './features/counter/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <OrderHeader/>
    <DeliveryDetails/>
    <Products/>
    <Counter/>
    </>
  )
}

export default App
