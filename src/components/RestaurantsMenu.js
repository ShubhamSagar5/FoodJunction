import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { RES_MENU_URL } from "../utilis/Constant"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utilis/useRestaurantMenu"

const RestaurantsMenu = () => {
   

    const {resId} = useParams()

  
   
    const resMenu = useRestaurantMenu(resId)
   

    if(resMenu === null) {
        return <Shimmer/>
       }
   
   const {areaName,costForTwoMessage,cuisines,name,sla,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info
   const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card

console.log(resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card)

    return (
        <div className="p-2 m-2">
            <h2 className="text-3xl font-semibold p-1 m-1">{name}</h2>
            <p className=" text-lg font-semibold p-1 m-1">{cuisines.join(",")} {costForTwoMessage}</p>
            <p className=" text-lg font-semibold p-1 m-1">{areaName}</p>
            <p className=" text-lg font-semibold p-1 m-1">{sla.deliveryTime} Min</p>
           
            <h2 className=" text-lg font-semibold p-1 m-1">Menu : </h2>
            <ul className=" text-lg font-normal p-3 m-1 ">
                {
                    itemCards?.map((res)=> {
                       return <li className="list-decimal m-4">{res.card.info.name} - Rs- {res.card.info.price/100}</li> })
                }
            </ul>
        </div>
    )
}

export default RestaurantsMenu