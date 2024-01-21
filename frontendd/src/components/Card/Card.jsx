import React from 'react'
import "./card.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addBasket } from '../../redux/slices/slice'
import { inc } from '../../redux/slices/slice'
function Card({product}) {
     const navigate = useNavigate();

  const baskets = useSelector((state) => state.products.basket)

  const dispatch = useDispatch()

  console.log(baskets)
  return (
    <div className="card">
      <div className="image">
      <img src={product.image} alt="" />
      </div>
      <div className="footer">
        <p className="name">
          {product.name}
        </p>
        <p className="price">
                    {product.price}
 $
        </p>
      </div>
      <div className="basket-detail">
      <div className="basket">
      <FontAwesomeIcon onClick={()=> {
dispatch(addBasket({...product, count:1}))
      }} icon={faBasketShopping} />
    
      </div>
      <div className="button">
        <button onClick={()=>{
          navigate(`products/${product._id}`)
        }}>detail</button>
      </div>
      </div>
     
      </div>
  )
}

export default Card
