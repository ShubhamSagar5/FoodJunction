import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantsInfo } from '../utilis/MockData'
import Shimmer from './Shimmer'

const Body = () => {
  
  const [resData ,setResData] = useState([])
  
  const fetchData = async () => {
    const ResDataAPI = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.9974533&lng=73.78980229999999")
    const data = await ResDataAPI.json()
    setResData(data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants      )
    // setResData(data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }

useEffect(()=>{
  fetchData()
},[])
  


  const handleTopRated = () => {
    setResData(resData.filter((res)=> res.info.avgRating > 4.5))
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