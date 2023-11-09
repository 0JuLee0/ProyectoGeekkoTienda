import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";
import './CartContent.css'

const CartElements = () => {
    const { cart, setCart, saveLocal} = useContext(dataContext);

    const deleteProduct = (id)=>{
        const foundID = cart.find((element)=>element.id === id);
        const newCart = cart.filter((element)=>{
            return element !== foundID;
        })
        saveLocal(newCart);
        setCart(newCart);
    };

    return cart.map((product) => {
        return (
            <div className="cartContent" key={product.id}>
                <img src={`http://localhost:4000/image/${product.img}`} alt="img-product-card" />
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product}/>
                <h4 className="price">${product.price * product.quanty}</h4>
                <h3 className="cart-delete-button" onClick={()=>deleteProduct(product.id)}>❌</h3>
            </div>


        )
    })
}

export default CartElements;
