import { Link } from 'react-router-dom'
import React from 'react'
import './CartEmpty.css'

const CartEmpty = () => {
    return (
        <div className="background">
            <div className="cart">
            <h1 className='text-empty'>Tu carrito de compras está vacío</h1>
                <Link to="/" className="btn">Seguir comprando</Link>
            </div>
        </div>
    )
}

export default CartEmpty
