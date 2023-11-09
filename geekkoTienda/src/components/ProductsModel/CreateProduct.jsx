import React, { Component } from 'react'
import './CreateProduct.css'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import Swal from 'sweetalert2'


export default class CreateProduct extends Component {


    state = {
        products: [],
        id: '',
        name: '',
        price: '',
        img: '',
        stock: '',
    }



    componentDidMount() {
        axios.get('http://localhost:4000/api/products');

    }
    
    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onchangeID = (e) => {
        this.setState({ id: e.target.value })
    }

    onChangePrice = (e) => {
        this.setState({ price: e.target.value })
    }


    onChangeStock = (e) => {
        this.setState({ stock: e.target.value })
    }

    handleInit = () => {
        this.props.history.push('/list-products')
    }


    onSubmit = async (e) => {
        const newProduct = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            img: this.state.img,
            stock: this.state.stock
        }
        e.preventDefault();
        const response = await axios.post('http://localhost:4000/api/products', newProduct)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Producto Creado',
                text: 'El producto ha sido agregado correctamentea la base de datos',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no se pudo agregar, por favor intenta nuevamente',
            })
        }
        this.setState({ id: '', name: '', price: '', stock: '' })
        this.handleInit()

    }

    validateType = (file) => {
        const validTypes = ['image/jpg', 'image/png', 'image/jpeg'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    };

    validateSize = (file) => {
        const validSize = 2100000;
        if (file.size > validSize) {
            return false;
        }
        return true;
    };

    handleFileSelect = (files) => {
        if (files) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target?.result;
                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(image, 0, 0);
                        const MAX_WIDTH = 120;
                        const MAX_HEIGHT = 100;
                        let width = image.width;
                        let height = image.height;
                        if (width > height) {
                            if (width > MAX_WIDTH) {
                                height *= MAX_WIDTH / width;
                                width = MAX_WIDTH;
                            }
                        } else {
                            if (height > MAX_HEIGHT) {
                                width *= MAX_HEIGHT / height;
                                height = MAX_HEIGHT;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        const ctx2 = canvas.getContext('2d');
                        if (ctx2) {
                            ctx2.drawImage(image, 0, 0, width, height);
                            const dataurl = canvas.toDataURL('image/png');
                            if (this.validateType(file) && this.validateSize(file)) {
                                console.log(dataurl);
                                this.setState({ img: dataurl });
                            }
                        }
                    }
                };
            };
            reader.readAsDataURL(file);
        }
    }
    render() {

        return (
            <>
                <Navbar />
                <div className="content">
                    <div className="col-md-4 left">
                        <div className="card card-body">
                            <form onSubmit={this.onSubmit}>
                                <h3>Crear nuevo Producto</h3>
                                <div className="form-group">
                                    <label>ID</label>
                                    <input type="number" className='form-control'
                                        required="True"
                                        onChange={this.onchangeID}
                                        value={this.state.id} />
                                </div>
                                <div className="form-group">
                                    <label>NOMBRE</label>
                                    <input type="text" className='form-control'
                                        required="True"
                                        onChange={this.onChangeName}
                                        value={this.state.name} />
                                </div>
                                <div className="form-group">
                                    <label>IMAGEN</label>
                                    <input
                                        id="file-input"
                                        accept="image/png, image/jpeg, image/jpg"
                                        type="file"
                                        required="True"
                                        onChange={(e) => {
                                            const files = e.target.files;
                                            this.handleFileSelect(files);
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>PRECIO</label>
                                    <input type="number" className='form-control'
                                        required="True"
                                        onChange={this.onChangePrice}
                                        value={this.state.price} />
                                </div>
                                <div className="form-group">
                                    <label>STOCK</label>
                                    <input type="number" className='form-control'
                                        required="True"
                                        onChange={this.onChangeStock}
                                        value={this.state.stock} />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    GUARDAR
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

