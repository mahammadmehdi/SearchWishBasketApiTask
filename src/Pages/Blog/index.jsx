import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { NavLink } from 'react-router-dom'
import { WishlistContext } from '../../Context/WishlistContext'
import { SearchContext } from '../../Context/SearchContext'

function Blog() {
  const {  AddBasket } = useContext(BasketContext)
  const { wishlist,AddWishlist} = useContext(WishlistContext)
  const { search} = useContext(SearchContext)

  console.log(wishlist);
  return (
    <div className='basketpage'>
    {wishlist.length ? <div className='page'><div className='cards'>

      {wishlist
          .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))

        .map((x) =>

          <ul className='card'>
            <li className='image'><img src={x.image} /><div className='cardHover'>

              <NavLink to={"/detail/"+ x.id}> <i class="fa-regular fa-eye"></i></NavLink>

              <i class="fa-solid fa-basket-shopping" onClick={() => { AddBasket(x) }}></i>
              <i class="fa-regular fa-heart" onClick={()=>{AddWishlist(x)}}></i>
            </div></li>
            <h2 className='name'>{x.title}</h2>
            <h3 className='cost'>${x.price} <span className='discount'>$35.00</span></h3>
             
         
          </ul>
        )}
        
    </div></div>
      : <h1 className='null'> Wishlistde mehsul yoxdur</h1>}


  </div>
  )
}

export default Blog