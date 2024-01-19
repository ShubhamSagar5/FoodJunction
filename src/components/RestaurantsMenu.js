import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { RES_MENU_URL } from "../utilis/Constant"
import { useParams } from "react-router-dom"

const RestaurantsMenu = () => {
   

    const {resId} = useParams()

    const [resMenu,setResMenu] = useState(null)
   
    const fetchData = async () => {
        const data = await fetch(RES_MENU_URL+resId)
        const resData = await data.json()
        console.log(resData)
       setResMenu(resData)
    }


    useEffect(()=>{
        fetchData()
    },[])
   

    if(resMenu === null) {
        return <Shimmer/>
       }
   
   const {cloudinaryImageId,areaName,costForTwoMessage,cuisines,name,sla,totalRatingsString} = resMenu?.data?.cards[0]?.card?.card?.info
   const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card

console.log(resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card)

    return (
        <div>
            <h2>{name}</h2>
            <p>{cuisines.join(",")} {costForTwoMessage}</p>
            <p>{areaName}</p>
            <p>{sla.deliveryTime} Min</p>
           
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((res)=> {
                       return <li>{res.card.info.name} - Rs- {res.card.info.price/100}</li> })
                }
            </ul>
        </div>
    )
}

export default RestaurantsMenu