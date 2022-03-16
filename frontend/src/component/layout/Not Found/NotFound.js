import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import "./NotFound.css"
import ErrorIcon from '@mui/icons-material/Error';
const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />
      <Typography>NotFound</Typography>

      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound;