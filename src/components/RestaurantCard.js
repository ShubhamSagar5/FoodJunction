import React from 'react'
import { RESCARD_IMG } from '../utilis/Constant'

const RestaurantCard = ({resData}) => {
  
  const {avgRating,cloudinaryImageId,costForTwo,cuisines,id,name,sla} = resData.info

  return (
    <div className='w-[275px] bg-gray-400  flex flex-col rounded-lg gap-2'>

        <img className='w-[250px] h-[175px] m-auto mt-3 rounded-lg' src={RESCARD_IMG+cloudinaryImageId}  alt="resIMG" />
        <h3 className='m-2 text-lg font-bold'>{name}</h3>
        <h4 className='m-2'>{cuisines.join(',')}</h4>
        <h4 className='m-2'>{costForTwo}</h4>
        <h4 className='m-2'>{avgRating} Stars</h4>
        <h4 className='m-2'>{sla.deliveryTime} Min</h4>

    </div>
  )
}

export default RestaurantCard