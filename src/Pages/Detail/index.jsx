import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"
import { BasketContext } from '../../Context/BasketContext';

function Detail() {
  let { id } = useParams();
  const [detail, setDetail] = useState([])
  const { AddBasket} = useContext(BasketContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setDetail(data))
  }, [])

  return (
    <div className='pages'><div className='cards'>
      <ul className='card'>
        <li className='image'><img src={detail.image}/></li>
        <i class="fa-solid fa-basket-shopping" onClick={()=>{AddBasket(detail)}}></i>
        <div className='productDetail'> <h1 className='name'>{detail.title}</h1>
          <h3 className='cost'>Price: ${detail.price}.00 <span className='discount'>$35.00</span></h3>
          <li className='desc'><h3>Description:</h3>{detail.description}</li>
          <li className='category'><h3>Category:</h3>{detail.category}</li></div>
      </ul>
    </div></div>
  )
}

export default Detail