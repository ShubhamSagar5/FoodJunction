import { useState } from "react"
import ItemList from "./ItemList"

const ResMenuList = ({data,showItem,setShowItem}) => {
    
    // console.log(data)

    

    const handleAccordian = () => {
        setShowItem()
    }


    return (
        <div className="w-6/12 bg-gray-200 mx-auto my-5 shadow-sm border-gray-500 border-b-2">
            <div>
                <div className="flex justify-between p-2 m-2 cursor-pointer" onClick={handleAccordian}>
                    <span className=" font-bold text-[20px]">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>
                    {showItem && <ItemList data={data.itemCards}/>}
                </div>
            </div>


        </div>
    )
}

export default ResMenuList