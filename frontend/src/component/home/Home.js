import React, { Fragment,useEffect } from 'react'
import "./Home.css";
import Banner from './Banner';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import MetaData from '../layout/MetaData'
import {clearErrors, getProduct} from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux";
import ProductCard from './ProductCard';
import Loader from '../layout/Loader/Loader'
import {useAlert} from 'react-alert';
const useStyle = makeStyles({
  component:{
    padding:10,
    background:'#f2f2f2',
  }
})

const Home = () => {
  const alert = useAlert();
  const dispatch =  useDispatch();
  const {loading,error,products} = useSelector(
    (state)=>state.products
  )

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  },[dispatch,error,alert]);


  const classes = useStyle();
  return (
    <Fragment>
      {loading ? <Loader />:<Fragment>
    <MetaData title="A2Z Store" />
    <Box className={classes.component}>
        <Banner />
    </Box>
    <Box>
    <h2 className="homeHeading">Featured Products</h2>
    <div className="container" id="container">
      {products && products.map(product => (
        <ProductCard product={product} />
      ))}
    </div>
    </Box>
    </Fragment>}
    </Fragment>
  )
}

export default Home;