import React, { Component } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Home/home';
import CartContent from './components/CartContent/CartContent';
import CreateProduct from './components/ProductsModel/CreateProduct';
import ListProducts from './components/ProductsModel/ListProducts';
import EditProduct from './components/ProductsModel/EditProduct'
import Register from './components/Register/Register'
import UserList from './components/Register/UserList';
import EditUser from './components/Register/EditUser';


class App extends Component  {
  render(){
    return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path='/create-user' element={<Register />} /> 
          <Route path='/list-users' element={<UserList />} /> 
          <Route path='/edit-user/:id' element={<EditUser />} />  
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/edit-product/:id' element={<EditProduct />} /> 
          <Route path='/list-products' element={<ListProducts />} />
        </Routes>
      </BrowserRouter>
  )
    }
    
}

export default App;
