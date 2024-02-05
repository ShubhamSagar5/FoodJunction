import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { RES_MENU_URL } from "../utilis/Constant"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utilis/useRestaurantMenu"
import ResMenuList from "./ResMenuList"

const RestaurantsMenu = () => {
   

    const {resId} = useParams()

  const [showItem,setShowItem] = useState(null)
   
    const resMenu = useRestaurantMenu(resId)
   

    if(resMenu === null) {
        return <Shimmer/>
       }
   
   const {areaName,costForTwoMessage,cuisines,name,sla,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info
   const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card

   const category = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=> card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

// console.log(category)

    return (
        <div className="p-2 m-2 text-center">
            <h2 className="text-3xl font-semibold p-1 m-1">{name}</h2>
            <p className=" text-lg font-semibold p-1 m-1">{cuisines.join(",")} {costForTwoMessage}</p>
            <p className=" text-lg font-semibold p-1 m-1">{areaName}</p>
            <p className=" text-lg font-semibold p-1 m-1">{sla.deliveryTime} Min</p>
           
           <div>
            {
                category.map((card,index)=> <ResMenuList key={card.card.card.title} data={card.card.card} showItem={index === showItem ? true : false} setShowItem={()=> setShowItem(showItem === index ? 'null' : index)}/>)
            }
           </div>
            
        </div>
    )
}

export default RestaurantsMenu