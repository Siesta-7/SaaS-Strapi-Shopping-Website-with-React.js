import "./products.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import List from "../../components/List/List"
import useFetch from "../../Hooks/useFetch"
import { makeRequest } from "../../makeRequest"
import useOnClickOutside from 'use-onclickoutside'

export const Products = ()=>{
   
    
    const [price, setPrice] = useState(
        {
            min:0,
            max:500
        }
    )
    
    const [sort, setSort] = useState("asc")
    const catId = useParams().id
    const {data, loading, error} = useFetch(`/sub-categories?&[filters][categories][id][$eq]=${catId}`)
    const [selectedSubCat, setSelectedSubCat] = useState([])
    const [catPic, setCatPic] = useState({})
    const handleSubCat = (e) =>{
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter(item=>item!==value))      
    } 

    const prices = [{min:0,max:50}, {min:50,max:100}, {min:100,max:150}, {min:150,max:200}]
    const [filter, setFilter] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, ()=>setFilter(false))
    useEffect(()=>{
        const fetchPic = async ()=>{
            const res = await makeRequest.get(`/categories?populate=*&[filters][id][$eq]=${catId}`)      
            setCatPic(res)
            
        }
        fetchPic()
    },[catId])

    const handleFilter = () =>{
        setFilter(!filter)
    }
    return(
        <div>
            {error ? "Something went wrong" :
            (loading ? "Loading" :
            <div className="products">
                <div className="filter" onClick={()=>handleFilter()}> 
                    <span>Filter</span>
                    <KeyboardArrowDownIcon  />         
                </div>     
                <div ref={ref} className={"left "+ (filter && "open")}>           
                    <div className="filterItem">
                        <h2>Product Categories</h2>
                        {data.map(item=>(
                        <div className="inputItem">
                            <div className="category">
                                <input type="checkbox" id={item.id} value={item.id} onChange={handleSubCat}/>
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>  
                        </div> 
                        ))}             
                    </div>
                    <div className="filterItem">
                        <h2>Filter by price</h2>
                        <div className="inputItem">
                            {prices.map(item => (
                            <div className="price">
                                <input name="same" id="priceFilter" type="radio" onChange={(e)=>setPrice({...price, min:item.min, max:item.max})} />
                                <label for="priceFilter" >${item.min}-{item.max}</label>
                            </div>
                            ))}
                            <div className="price">
                                <input name="same" id="500" type="radio" onChange={(e)=>setPrice({...price, min:0, max:500})} value="200" />
                                <label for="500" >All</label>
                            </div>                  
                        </div>
                    </div>
                    <div className="sortItem">
                        <h2>Sort by</h2>
                        <div className="sort">
                            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort(e.target.value)} />
                            <label htmlFor="asc" >Price (Lowest to hightest)</label>
                        </div>
                        <div className="sort">
                            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort(e.target.value)} />
                            <label htmlFor="desc" >Price (Highest to lowest)</label>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img className="catImg" src={process.env.REACT_APP_UPLOAD_URL + catPic?.data?.data[0]?.attributes?.img?.data?.attributes?.url} alt=""/>
                    <h2 className="catTitle">{catPic?.data?.data[0]?.attributes?.title}</h2>
                    <List catId={catId} sort={sort} price={price} selectedSubCat={selectedSubCat} />  
                </div>

            </div>
            )}
        </div>      
    )
}
