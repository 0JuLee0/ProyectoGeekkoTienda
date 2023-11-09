import './Navbar.css';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
        <nav className="navbar">
        <Link  className="navbar-text" to='/'>Inicio</Link>
        <Link className="navbar-text" to='/create-user'>Registrar Usuario</Link>
        <Link className="navbar-text" to='/list-users'>Lista de Usuarios</Link>
        <Link className="navbar-text" to='/create-product'>Crear Producto</Link>
        <Link className="navbar-text" to='/list-products'>Lista de Productos</Link>
        
        <Link className="seeCarrito" to='/cart'>🛒
        {cart.length >0 ? <TotalItems/> : null}
        </Link>
        </nav>
    </div>
  )
}

export default Navbar
