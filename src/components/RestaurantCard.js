import React from 'react'

const RestaurantCard = ({resData}) => {
  
  const {avgRating,cloudinaryImageId,costForTwo,cuisines,id,name,sla} = resData.info
  const imgURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div className='restaurantCard'>

        <img className='resImg' src={imgURL+cloudinaryImageId}  alt="resIMG" />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.deliveryTime} Min</h4>

    </div>
  )
}

export default RestaurantCard