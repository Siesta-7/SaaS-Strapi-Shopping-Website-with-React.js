import "./navbar.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {

  const [open, setOpen] = useState(false)
  const item = useSelector(state=>state.cart.products)
  return (
    <div className="navbar" >
      <div className="wrapper" >
        <div className="left">
          <Link className="link logo" to="/">SiestaStore</Link>
        </div>
        <div className="center">
          <div className='item'>
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/6">Accessories</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/5">Shoes</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/4">New Season</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/3">Sale</Link>
          </div>
        </div>
        
        <div className="right">
          <div className='icons'> 
            <div className='cartIcon' onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{item.length}</span>
            </div>         
          </div>   
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

