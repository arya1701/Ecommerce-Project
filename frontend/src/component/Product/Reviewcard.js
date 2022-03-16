import React from 'react'
import Rating from '@mui/material/Rating';
import profilePng from "../../images/profilePng.jpg";



const Reviewcard = ({review}) => {

    const options = {
      size: "large",
      value: review.rating,
      readOnly: true,
      precision: 0.5,
    }
  return (
    <div className='reviewCard'>
        <img src={profilePng} alt="user" />
        <p>{review.name}</p>
        <Rating {...options} />
        <span className='reviewCardComment'>{review.comment}</span>
    </div>
  )
}

export default Reviewcard