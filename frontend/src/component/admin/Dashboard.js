import React,{useEffect} from 'react'
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import Chart from 'chart.js/auto'
import {useSelector,useDispatch} from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import {getAdminProduct} from "../../actions/productAction";
import { getAllOrders } from '../../actions/orderAction.js';
import {getAllUsers} from "../../actions/userAction"
const Dashboard = () => {

  const dispatch = useDispatch();

  const { error,products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders)
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "Total Amount",
        backgroundColor: ["#1B262C"],
        hoverBackgroundColor: ["#0F4C75"],
        data: [0, totalAmount],
      },
    ],
  };
  const doughnutState = {
    labels: ["Out of Stock", "Instock"],
    datasets: [
      {
        backgroundColor: ["#0F4C75", "#3282B8"],
        hoverBackgroundColor: ["#406882", "#406882"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  }
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard