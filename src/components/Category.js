import React, { useState } from 'react';
import '../styles/cards.css';
import data from '../data';
const Category = () => {
    const[value,setData]=useState(data);
    const filterResult=(catItem)=>{
        const result =  data.filter((curData)=>{
            return curData.title===catItem.title;
        })
        setData(result);
    }
  return (
    <div className='category'>
        <div className='in'>
            <i className="fa fa-list-alt"></i>
            <span className='text'>Categories</span>
        </div>
        <button onClick={()=>filterResult('Girls')}>Girls</button>
        <button>Boys</button>
        <button>All</button>
    </div>
  );
}

