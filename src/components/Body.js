import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantsInfo } from '../utilis/data'

const Body = () => {
  
  const [resData ,setResData] = useState(restaurantsInfo)
  console.log(resData)
  return (
    <div className='body'>
      <div className='search'>
        <h2>Search</h2>
      </div>
      <div className='restaurantContainer'>
        {
        resData?.map((res)=>(<RestaurantCard key={res.info.id} resData={res}/>))
        }
   
        
      </div>
    </div>
  )
}

export default Body