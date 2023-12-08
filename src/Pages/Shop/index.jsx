import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'
import "./index.scss"
import { SearchContext } from '../../Context/SearchContext'

function Shop() {
  const { basket, AddBasket, increase, decrease, RemoveItem,getTotalPrice } = useContext(BasketContext)
  const { search} = useContext(SearchContext)


  return (
    <div className='basketpage'>
      {basket.length ? <div className='page'><div className='cards'>

        {basket
          .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))

          .map((x) =>

            <ul className='card'>
              <li className='image'><img src={x.image} /><div className='cardHover'>

                <NavLink to={"/detail/" + x.id}>
                  
                   <i class="fa-regular fa-eye"></i></NavLink>

                <i class="fa-solid fa-basket-shopping" onClick={() => { AddBasket(x) }}></i>
                <i class="fa-regular fa-heart"></i>
              </div></li>
              <h2 className='name'>{x.title}</h2>
              <h3 className='cost'>${(x.count*x.price ).toFixed(1)} <span className='discount'>$35.00</span></h3>
              <div className='countButton'>
                <div className='btn' onClick={() => { increase(x) }} >+</div>
              <div className="price">{x.count}</div>
                <div className='btn' onClick={() => { decrease(x) }} >-</div>
                <div className='removeBtn' onClick={() => { RemoveItem(x) }} >Remove Basket</div></div>
            </ul>
          )}
          <h1 className='basketTotalPrice'>SEBETIN UMUMI QIYMET: {getTotalPrice()}</h1>
      </div></div>
        : <h1 className='null'> Basketde mehsul yoxdur</h1>}


    </div>
  )
}

export default Shop