import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utilis/cartSlice"

const Cart = () => {
    
    const cartItems = useSelector((store)=> store.cart.items)
    
    // console.log(cartItems)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return (
        <div className="text-center w-6/12 m-auto">
            <div className="flex items-center justify-center">
                <div className=" font-bold text-2xl m-4 p-4">
                    Cart
                </div> 

                 <div className="p-2  bg-black text-white rounded-lg ml-[500px]"><button onClick={handleClearCart}>Clear Cart</button></div>
            </div>
            <div >
                <ItemList data={cartItems}/>
            </div>
            {cartItems.length === 0 && <p>Cart is Empty Add Some Items</p>}
        </div>
    )
}


export default Cart