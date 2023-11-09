import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import './CartContent.css'

const CartTotal = () => {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty,0)
    
  return (
    <div className="cartTotal">
        <h3>Total a pagar: ${total}</h3>
        <button ><Link to='/'>Ir a Pagar</Link> </button>
    </div>
  )
}

export default CartTotal
