import React, { useEffect } from 'react'
import "./forman.scss"
import { getAllData } from '../../redux/slices/slice'

import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/Card/Card'

function ForMan() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllData())
    }, []);
    const products = useSelector((state) => state.products.products)

    console.log(products)
  return (
    <section id="forman">
        <div className="container">
        <div className="head-text">
            <p className="head">
                
New realeased Products for Men
            </p>
            <p className="desc">
            Who are in extremely love with eco friendly system.
            </p>
        </div>
        <div className="cards">
            {products&& products.map((elem,i)=> {
                return <Card key={i} product={elem}/>
            })}
        </div>
        </div>
    </section>
  )
}

export default ForMan
