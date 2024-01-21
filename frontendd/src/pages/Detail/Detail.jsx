import React, { useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getAllData } from '../../redux/slices/slice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from "./../../components/navbar/Navbar"
import "./detail.scss"
function Detail() {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    console.log(products)
    useEffect(() => {
        dispatch(getAllData())
    }, []);
    let {id}= useParams()
console.log(id)
let find = products.find((element)=> element._id == id)
console.log(find)
  return (
    <>
    <Navbar/>
    <div className="detail">
        <div className='container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 600,  width: 345 }}
        image={find.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {find.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {find.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      
    </div>
    </div>
    </>
    
  )
}

export default Detail
