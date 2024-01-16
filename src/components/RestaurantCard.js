import React from 'react'
import { RESCARD_IMG } from '../utilis/Constant'

const RestaurantCard = ({resData}) => {
  
  const {avgRating,cloudinaryImageId,costForTwo,cuisines,id,name,sla} = resData.info

  return (
    <div className='restaurantCard'>

        <img className='resImg' src={RESCARD_IMG+cloudinaryImageId}  alt="resIMG" />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} Min</h4>

    </div>
  )
}

export default RestaurantCard