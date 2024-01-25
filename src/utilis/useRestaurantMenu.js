import { useEffect, useState } from "react"
import { RES_MENU_URL } from "./Constant"

const useRestaurantMenu = (resId) => {


    const [resInfo,setResInfo] = useState(null)



    const fetchData = async () => {
        const result = await fetch (RES_MENU_URL+resId )
        const data = await result.json()

        setResInfo(data)

        console.log(resInfo)

    }

        useEffect(()=>{
        fetchData()
    },[])




    return resInfo
}


export default useRestaurantMenu