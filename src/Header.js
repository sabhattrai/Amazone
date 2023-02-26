import React from 'react'
import "./Header.css"
import image from "../src/images.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className='header'>
        <img className='header_logo' src={image} alt=''/>
       
       <div className='header_search'>
          <input
          className='header_search'
          placeholder='name'
          type="text"/>
         <SearchIcon className="header_searchIcon" />
       </div>

       <div className='header_nav'>
        <div className='header_option'>  
         <span className='header_optionLineOne'>Guest</span>
          </div>
         <div className='header_option'>  
        <span className='header_optionLineOne'>Login</span>
        </div>
         <div className='header_option'>  
         <span className='header_optionLineOne'>sigin</span>
        </div>
         <div className='header_optionBasket'>
             <ShoppingBasketIcon />
             <span className='basket_count'>
              0
             </span>
         </div>
       </div>
    </div>
  )
}

export default Header
