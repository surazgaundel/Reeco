export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(number)
  }

  export const getDate=()=>{
    const date=new Date();
    return date.toDateString();
  }

  export const totalAmount=(price,quantity)=>{
    const newPrice=Number(price);
    const newQuantity=Number(quantity);
    return (newPrice*newQuantity).toFixed(2)
  }