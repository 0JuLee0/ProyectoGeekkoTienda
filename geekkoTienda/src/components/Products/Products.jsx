import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext.jsx";
import axios from "axios";
import './Products.css'

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    //axios('data.json').then((res)=>setData(res.data));
    axios('http://localhost:4000/api/products').then((res) => setData(res.data));
  }, [])


  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={`http://localhost:4000/image/${product.img}`} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <button onClick={() => buyProducts(product)}>Comprar</button>
      </div>
    );
  })
}

export default Products
