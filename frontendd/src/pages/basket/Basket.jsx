import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { deleteBasket, getAllData } from '../../redux/slices/slice';
import { inc } from '../../redux/slices/slice';
import "./basket.scss"
// import { deleteBasket } from '../../redux/slices/slice';
import Navbar from "./../../components/navbar/Navbar"
function Basket() {
    let products = useSelector((state) => state.products.basket)
    const dispatch = useDispatch()
    console.log(products)
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
     
      useEffect(() => {
        dispatch(getAllData())
    }, []);
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
  return (
    <>
    <Navbar/>
    <div className='basket'>
        <div className="container">
        <h1>basket</h1>
        <div className="table">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell  align="right">Inc</TableCell>
            <TableCell align="right">count</TableCell>
            <TableCell align="right">dec</TableCell>
            <TableCell align="right">total</TableCell>
            <TableCell align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><Button onClick={()=>{
                console.log(row)
                let obj= {
name:row.name,
price:row.price,
count:row.count+=1,
image:row.image
                }
                let arr = products.map((elem)=> {
                  if(elem._id == row._id){
                    return obj
                  }
                  else{
                    return elem
                  }
                })
                dispatch(inc(arr))

              }} variant="contained">Inc</Button></TableCell>
              <TableCell align="right">{row?.count}</TableCell>

              <TableCell align="right"><Button onClick={()=>{
                if(row.count>=0){
                    row.count-=1
                }
              }} variant="contained">Dec</Button></TableCell>
              <TableCell align="right">{Number(row?.count) * Number(row?.price)}</TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(deleteBasket(row))
              }} variant="contained">delete</Button></TableCell>

            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </div>

      
    </div>
    
    </>
    
  )
}

export default Basket
