import "./cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem, resetCart } from "../../redux/cartReducer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {

   const data = useSelector(state=>state.cart.products)
   const dispatch = useDispatch()

   const totalPrice = ()=>{
    let total = 0
    data.forEach(item=>{
        total+=item.quantity*item.price
    })
    return total.toFixed(2)
   }

  return (
    <div className={"cart "+ (data.length > 0 && (data.length == 1 ? "filled1" : "filled"))}>
        <h1>Products in your cart</h1>
        <span className="info">YOUR CART IS EMPTY</span>
        <div className="center">
            {data?.map(item =>(
                <div className="item" key={item.id}>
                    <div className="image">
                        <img src={process.env.REACT_APP_UPLOAD_URL+ item.img} />
                    </div>            
                    <div className="details">
                        <h4>{item.title}</h4>
                        <span className="desc">{item.desc?.substring(0,30)}...</span>
                        <span className="price">{item.quantity} x ${item.price}</span>      
                    </div>
                    <div className="right">
                        <div className="icons">
                            <AddIcon className="quantity" onClick={()=>dispatch(increase(item.id))}/>
                            <RemoveIcon className="quantity" onClick={()=>dispatch(decrease(item.id))}/>
                        </div> 
                        <DeleteOutlineIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
                    </div>                     
                </div>
            )
            )}
        </div>
        
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Card</span>

    </div>
  )
}

export default Cart