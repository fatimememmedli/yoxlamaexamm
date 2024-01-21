import React, { useEffect } from 'react'
import "./products.scss"
import Card from '../../components/Card/Card'
import { getAllData } from '../../redux/slices/slice'
import { useSelector, useDispatch } from 'react-redux'
function Products() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.products)
useEffect(() => {
    dispatch(getAllData())
}, []);
console.log(products)

  return (
    <section id="products">
        <div className="container">
            <div className="header">
                <p className='head'>New realeased Products for Women</p>
                <p className='desc'>Who are in extremely love with eco friendly system.</p>
            </div>
            <div className="cards">
                {products&& products.map((element,i)=> {
                    return <Card key={i} product={element}/>
                })}
            

            </div>

        </div>
    </section>
  )
}

export default Products
