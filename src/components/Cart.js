import { useSelector } from "react-redux"
import ItemList from "./ItemList"

const Cart = () => {
    
    const cartItems = useSelector((store)=> store.cart.items)
    
    // console.log(cartItems)
    
    return (
        <div className="text-center w-6/12 m-auto">
            <div className=" font-bold text-2xl m-4 p-4">
                 Cart
            </div>
            <div >
                <ItemList data={cartItems}/>
            </div>
        </div>
    )
}


export default Cart