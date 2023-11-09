import React, { Component } from 'react'
import './ListProducts.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { Link } from 'react-router-dom';


export default class CreateProduct extends Component {

    state = {
        products: [],
        id: '',
        name: '',
        price: '',
        img: '',
        stock: ''
    }



    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        // const res = await axios('data.json')
        const res = await axios('http://localhost:4000/api/products')
        this.setState({ products: res.data });
    }




    deleteProducts = async (id) => {
        await axios.delete('http://localhost:4000/api/products/' + id)
        this.getProducts();
    }


    render() {


        return (
            <>
                <Navbar />
                <div className="row container">
                    <div className='right'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">PRECIO</th>
                                    <th scope="col">CANTIDAD</th>
                                    <th scope="col">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map((product, index) => (
                                    <tr key={product._id}
                                    >
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>
                                            <button className="delete-button" onClick={() => this.deleteProducts(product._id)} >Eliminar</button>
                                            <button className="update-button"><Link className='Link' to={`/edit-product/${product._id}`}>Editar</Link></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </>
        )
    }
}

