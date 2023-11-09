import React, { useEffect, useState } from 'react'
import './CreateProduct.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { useParams, useNavigate  } from 'react-router-dom';


function EditProduct(){

    
    const params = useParams();
    
    //Hooks
    const[name,setName] = useState('')
    const[price,setPrice] = useState('')
    const[stock,setStock] = useState('')
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/api/products/${params.id}`,{_id:params.id}).then(res=>{
            const userData = res.data
            setName(userData.name)
            setPrice(userData.price)
            setStock(userData.stock)
        })
    },[])

    function EditProduct(){
        const newProduct={
            _id: params.id,
            name: name,
            price: price,
            stock: stock
        }
        axios.put(`http://localhost:4000/api/products/${params.id}`,newProduct)
        navigate('/list-products');

    }
    

    return (
        <>
            <Navbar />
            <div className="content">
                <div className="col-md-4 left">
                    <div className="card card-body">
                        <form>
                            <h3>Editar Producto</h3>
                            <div className="form-group">
                                <label>NOMBRE</label>
                                <input type="text" className='form-control'
                                required="True"
                                value={name} onChange={(e)=>setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>PRECIO</label>
                                <input type="number" className='form-control'
                                required="True"
                                value={price} onChange={(e)=>setPrice(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>STOCK</label>
                                <input type="number" className='form-control'
                                required="True"
                                value={stock} onChange={(e)=>setStock(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={EditProduct}>
                                GUARDAR
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default EditProduct