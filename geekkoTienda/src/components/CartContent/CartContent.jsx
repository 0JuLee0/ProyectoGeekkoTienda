import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from './CartElements'
import CartTotal from './CartTotal'
import React from 'react'
import CartEmpty from "./CartEmpty";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
    const { cart } = useContext(dataContext);

    //condition ? true : false

    return (
        <>
            <Navbar />
            {cart.length > 0 ? (
                <>
                    <CartElements />
                    <CartTotal />
                </>
            ) : (
                <>
                    <CartEmpty />
                </>
            )}
        </>
    )
}


export default CartContent
