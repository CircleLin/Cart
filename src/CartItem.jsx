import React from 'react'

const CartItem = ({cartItem, deleteHandler, calcPriceHandler}) => {
  const deleteItem = (id)=>{
    deleteHandler(id);
  }
  const calcPrice = (id, act)=>{
    calcPriceHandler(id, act);
  }

  return (
    <tr className='h4'>
      <td className='text-center'>{cartItem.id}</td>
      <td>{cartItem.name}</td>
      <td className='text-center'>{cartItem.price * cartItem.count}</td>
      <td className='text-center'>
        <button onClick={()=> {if(cartItem.count > 1){ calcPrice(cartItem.id,'minus')}}} className='me-1'>-</button>
        {cartItem.count}
        <button onClick={()=>calcPrice(cartItem.id,'plus')} className='ms-1'>+</button>
      </td>
      <td className='text-center'><button onClick={()=>deleteItem(cartItem.id)} className='btn btn-danger'>移除</button></td>
    </tr>
  )
}

export default CartItem