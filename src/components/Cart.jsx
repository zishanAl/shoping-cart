import React, { useEffect, useState } from 'react';
import '../styles/cart.css'

const Cart = ({cart,setCart,handleChange}) => {

    const [price,setPrice] = useState(0);

    const handleRemove = (id) =>{
      const arr = cart.filter((item) => item.id !== id);
      console.log(arr);
      setCart(arr);
    }

    const handlePrice = () => {
      let ans = 0;
      cart.map((item) => {
        ans+= item.amount * item.price;
      })
      setPrice(ans)
    }
    

    useEffect(() => {
      handlePrice();
    })
    
  return (
      <article>
        {
            cart?.map((item) => (
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>
                        <img src={item.img}/>
                        <p>{item.title}, id : {item.id}</p>
                    </div>
                    <div className='Button'>
                    <button onClick={() => {handleChange(item ,+1)}}>Increase</button>
                    <button onClick={() => {handleChange(item ,-1)}}>Decrease</button>
                    </div>
                    <div>
                      {/* <span>{item.amount}</span>
                      <span>{item.price}</span> */}
                      <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))
        }
        <div className='total'>
          <span>Total Price of your Cart</span>
          <span> Rs - {price}</span>
        </div>
      </article>
  )
}

export default Cart
