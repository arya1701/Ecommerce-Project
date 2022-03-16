import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Searchbar from './Searchbar';
// import Search  from "../../Product/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import "./Header.css";

// const useStyle = makeStyles({
//   header: {
//     background: '#0F4C75',
//     height: 65,
//   },
//   heading: {
//     textDecoration: 'none',
//     color: '#FFF',
//     fontSize: 25,
//     fontWeight: 700,
//   //   [theme.breakpoints.down('sm')]: {
//   //     margin: 0
//   // },
//   },
//   login: {
//     background: '#FFFFFF',
//     color: '#000',
//     textTransform: 'none',

//   },
//   wrapper: {
//     margin: '0 5% 0 auto',
//     display: 'flex',
//     // applied on the child compoonent
//     '& > *': {
//       marginRight: 50,
//       alignItems: 'center',
//     }
//   },
//   container: {
//     display: 'flex',

//   },
//   textLink:{
//     textDecoration:'none',
//     color:'none',
//   },
//   navItems:{
//     textDecoration:'none',
//     fontSize:17,
//     fontWeight:300,
//     color:'white',
//     '&:hover':{
//       color:'#BBE1FA',
//     }
//   }
// }
// );

export default function Header() {
  
  const { cartItems } = useSelector(state => state.cart);
  // const classes = useStyle();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (

    <AppBar position="static" className="header" >
      <Toolbar>
        <Link className="textLink" to="/">
          <Typography  component="div" className="heading">
            A2Z Store
          </Typography>
        </Link>
        <Searchbar />
        <Box className="wrapper">
          {/* <Link to ="/login">
          <Button variant="contained" className={classes.login}>Login</Button>
          </Link> */}
          {isAuthenticated === false ?
            <Link to="/login"> <Button variant="contained" className="login">Login</Button> </Link>
            :
            (
              <Typography className="navItems temp">{user.name && user.name.split(" ", 1)}

              </Typography>
            )
          }
          <Link className="textLink" to="/products" >
          <Typography className="navItems" >Products</Typography>
          </Link>
          <Box className="container">
            <Badge badgeContent=
                {cartItems.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>

            <Link className="textLink" to="/cart" >
              <Typography className="navItems">Cart</Typography>
            </Link>
          </Box>
        </Box>

      </Toolbar>
    </AppBar>

  );
}