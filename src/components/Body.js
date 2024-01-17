import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantsInfo } from '../utilis/MockData'
import Shimmer from './Shimmer'

const Body = () => {
  
  const [resData ,setResData] = useState(restaurantsInfo)
  


  


  const handleTopRated = () => {
    setResData(resData.filter((res)=> res.info.avgRating > 4))
  }
 
  if(resData.length === 0 ){
    return <Shimmer/>
  } 

  return (
    <div className='body'>
      <div className='search'>
        <h2>Search</h2>
        <button onClick={handleTopRated}>Top reated Hotel</button>
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