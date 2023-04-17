import "./product.scss"
import { useState } from "react"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

function Product() {
  const id = useParams().id
  const [selectedImg, setSelectedImg] = useState("img")
  const [quantity, setQuantity] = useState(1)
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`)
  const dispatch = useDispatch()
  
  return (
  
      <div className="product">
      {error ? "Something went wrong" :
      (loading ? "Loading":
        <div className="left">
          <div className="images">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick={()=>setSelectedImg("img")} />
            {data?.attributes?.img2?.data?.attributes?.url && 
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick={()=>setSelectedImg("img2")} /> }
          </div>
          <div className="mainImg">
            <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} />
          </div>
        </div>
      )}
        <div className="right">
          <h1>{data?.attributes?.title}</h1>
          <span className="price">$ {data?.attributes?.price}</span>
          <p>{data?.attributes?.desc}</p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=> prev===1 ? 1 : prev-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
          </div>
          <button className="add" onClick={()=>dispatch(addToCart({
            id:id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            img:data.attributes.img.data.attributes.url,
            quantity:quantity,
            price:data.attributes.price
          }))}>
            <AddShoppingCartIcon/> ADD TO CART
          </button>
          <div className="info first">
            <span>Vendor: Polo</span>
            <span>Product Type:T-Shirt</span>
            <span>Tag:T-Shirt, Women, Top</span>
          </div>
          <hr/>
          <div className="info details">
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>
        </div>
      </div>
      
      
    
    
  )
}

export default Product