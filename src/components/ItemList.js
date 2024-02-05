import { useDispatch } from "react-redux"
import { RESCARD_IMG } from "../utilis/Constant"
import { addItem } from "../utilis/cartSlice"

const ItemList = ({data}) => {
    
    // console.log(data)
  
    const dispatch = useDispatch()

    const handleAddToCart = (menuList) => {
        dispatch(addItem(menuList))
    }
    
    return (
        <div>
           {
            data.map((menuList)=> (
                <div key={menuList.card.info.id} className="text-left flex border-gray-300 border-b-2 m-2 p-2 shadow-sm">
                    <div className="w-9/12">
                        <p className=" font-bold">{menuList.card.info.name} - ₹{menuList.card.info.price ? menuList.card.info.price/100 :menuList.card.info.defaultPrice/100} </p>
                        <p>{menuList.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div>
                            <button className="bg-black text-white rounded-sm absolute  p-1" onClick={()=>handleAddToCart(menuList)}>Add +</button>
                    </div>
                    
                            <img src={RESCARD_IMG + menuList.card.info.imageId} alt="" />
                    </div>
                </div>
            ))
           }
        </div>
    )
}


export default ItemList