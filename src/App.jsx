import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CartItem from './CartItem'
import data from './assets/data.json'

function App() {

  const [cart,setCart] = useState(data.cart);
  
  const deleteHandler = (id)=>{
    const filteredCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(filteredCart);    
  }

  const calcPriceHandler = (id, act)=>{
    const newCart = cart.map(item => {
      if(item.id == id){
        
          const editCount = act == 'minus' ? item.count -= 1 : item.count += 1;
          return {...item, count: editCount};
              
      }
      return item;
    })

    setCart(newCart);   
  }

  return (
    <div className='container'>
      <table className='table table-hover'>
        <thead>
          <tr className='h4'>
            <th className='text-center'>序號</th>
            <th>品名</th>
            <th className='text-center'>單價</th>
            <th className='text-center'>數量</th>
            <th className='text-center'>操作</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(item => {
              return <CartItem key={item.id} cartItem={item} calcPriceHandler={calcPriceHandler} deleteHandler={deleteHandler} />
            })
          }
        </tbody>
      </table>
      <h3>總價:{cart.reduce((total,item)=>total+(item.count*item.price),0)}</h3>

    </div>
  )
}

export default App
