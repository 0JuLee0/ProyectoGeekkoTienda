import { createContext, useState } from "react"
import Swal from 'sweetalert2'


export const dataContext = createContext();

const DataProvider = ({ children }) => {


  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  // set item
  const saveLocal = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  const buyProducts = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);
    if (product.stock < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Lo lamentamos',
        text: 'Este producto no está disponible en el momento,\nlamentamos las molestias ocasionadas.',
      })
    } else {
      if (productRepeat) {
        setCart(cart.map((item) => (item.id === product.id) ? { ...product, quanty: productRepeat.quanty += 1 } : item))
      } else {
        setCart([...cart, product])
      }
    }
    saveLocal(cart);
  };



  return (
    <dataContext.Provider value={{ cart, setCart, buyProducts, saveLocal }}>{children}</dataContext.Provider>
  )
};

export default DataProvider;