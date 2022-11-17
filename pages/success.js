import React,{ useState, useEffect } from 'react'
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireWorks } from '../lib/utils';

const Success = () => {
const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

useEffect(() => {
  
localStorage.clear();
setCartItems([]);
setTotalPrice(0);
setTotalQuantities(0);
  runFireWorks()
}, [])


  return (
    <div className='success-wrapper'>
    <div className='success'>
<p className='icon'>
  <BsBagCheckFill />
</p>
<h2>Thanks for shopping with us!</h2>
<p className='email-msg'>Your purchase receipt has been emailed.</p>
<p className='description'>
  Need help?
  <a className='email' href="mailto:orderss@sneakshow.com">Contact Us</a>
</p>
<Link href='/'>
  <button type="button" width="300px" className='btn'>Continue Shopping</button>
</Link>
    </div></div>
  )
}

export default Success