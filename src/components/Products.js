import React from 'react';
import list from '../data';
import '../styles/product.css';
import Cards from './Cards';
import '../styles/cards.css';
import { useState } from 'react';
const Products = ({handleClick}) => {
  const[data,setData]=useState(list);
    const filterResult=(catItem)=>{
        const result =  list.filter((curData)=>{
            return curData.title===catItem;
        })
        setData(result);
      }
  return (
    <section >
          <div className='category'>
          <div className='in'>
              <i className="fa fa-list-alt"></i>
              <span className='text'>Categories</span>
          </div>
          <button onClick={()=>filterResult('Baby Girl Dress')}>Baby Girl Dresses</button>
          <button onClick={()=>filterResult('Baby Boy Dress')}>Baby Boy Dresses</button>
          <button onClick={()=>filterResult('Shoes')}>Shoes</button>
          <button onClick={()=>filterResult('Caps')}>Caps</button>
          <button onClick={()=>setData(list)}>All</button>
         </div>
         {
          data.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
         }
    </section>
  )
}

export default Products