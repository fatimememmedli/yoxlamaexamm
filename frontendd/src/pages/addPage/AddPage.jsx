import React, { useEffect } from 'react'
import Navbar from "./../../components/navbar/Navbar"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./addPage.scss"
import { useSelector, useDispatch } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { deleteData } from '../../redux/slices/slice';
import { addData } from '../../redux/slices/slice';
import { getAllData } from '../../redux/slices/slice';
import { inc } from '../../redux/slices/slice';
function AddPage() {
  const products = useSelector((state) => state.products.products)

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
     
      useEffect(() => {
        dispatch(getAllData())
    }, []);
  const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          name: '',
          price: '',
          image: '',
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          price: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          image: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log(values)
        },
      });
      const SignupForm = () => {
        const formik = useFormik({
          initialValues: {
            name: '',
            price: '',
            image: '',
          },
          validationSchema: Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
              price: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
           
          }),
          onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            dispatch(addData(values))

          },
        });
        return (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
      
            <label htmlFor="price">price</label>
            <input
              id="price"
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}
      
            <label htmlFor="image">image</label>
            <input
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : null}
      
            <button type="submit">add</button>
          </form>
        );
      };

    
  return (
    <>
    <Navbar/>
    <section id="addpage">
    <div className="container">
    {SignupForm()}
    <div className="table">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">price</TableCell>
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
                dispatch(deleteData(row))
              }} variant="contained">delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>
    </section>
      
    </>
  )
}

export default AddPage
