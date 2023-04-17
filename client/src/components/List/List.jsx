import useFetch from "../../Hooks/useFetch"
import Card from "../Card/Card"
import "./list.scss"

const List = ({catId, sort, price, selectedSubCat})=> {

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCat.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
      )}&filters[price][$lte]=${price.max}&filters[price][$gt]=${price.min}&sort=price:${sort}`)
     
  return (
    <div className="list">
        {error ? "Something went wrong" : (loading ? "Loading": data?.map(item=>(
            <Card item={item} key={item.id} />
        ))) }
    </div>
   
  )
}

export default List