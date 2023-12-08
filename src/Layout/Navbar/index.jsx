import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { BasketContext } from '../../Context/BasketContext'
import { SearchContext } from '../../Context/SearchContext'

function Navbar() {
  const { basket } = useContext(BasketContext)
  const {handleSearch}=useContext(SearchContext)
  return (
    <div className='navigation'>

      <NavLink to={"/"}><div className='navbarImage'>
        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
      </div></NavLink>
      <div className='navbarPages'>
        <NavLink to={"/"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>HOME</li></NavLink>
        <NavLink to={"/basket"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li className='basket'>BASKET <sup>{basket.length ? basket.length : ""}</sup></li></NavLink>
        <NavLink to={"/blog"} style={({ isActive }) => {
          return {

            color: isActive ? "green" : "black",

          };
        }}><li>BLOG</li></NavLink>
        <NavLink to={"/pages"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>PAGES</li></NavLink>
        <NavLink to={"/contact"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>CONTACT</li></NavLink>



      </div>
      <div className='navbarIcon'>
        <input className='input' type="text" onChange={(e)=>handleSearch(e)}/>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <i class="fa-regular fa-user"></i>
        <NavLink to={"/blog"}><i class="fa-regular fa-heart"><sup>{basket.length ? basket.length : ""}</sup></i></NavLink>
      </div>
    </div>
  )
}

export default Navbar