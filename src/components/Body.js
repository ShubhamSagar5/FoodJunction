import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantsInfo } from '../utilis/MockData'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  
  const [resData ,setResData] = useState(restaurantsInfo)
  
  const [filterRes,setFilterRes] = useState(restaurantsInfo)

  const [searchText,setSearchText] = useState('')
  const fetchData = async () => {
    const ResDataAPI = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await ResDataAPI.json()
    setResData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRes(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // setResData(data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }

useEffect(()=>{
  fetchData()
},[])
  


  const handleTopRated = () => {
    setFilterRes(resData.filter((res)=> res.info.avgRating > 4.5))
  }
 
  const handleSeacrhFun = () => {
    const filterResList = resData.filter((res)=> res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    setFilterRes(filterResList)
  }



  if(resData.length === 0 ){
    return <Shimmer/>
  } 

  return (
    <div className='body'>
      <div className='functionality'>
        <div className='searchContainer'>
            <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={handleSeacrhFun}>Search</button>
        </div>
        <div className='topRatedBtn'>
          <button onClick={()=>{setFilterRes(resData)}}>All Restaurants</button>
        </div>
        <div className='topRatedBtn'>
                  <button onClick={handleTopRated}>Top reated Hotel</button>

        </div>
      </div>
      <div className='restaurantContainer'>
        {
        filterRes?.map((res)=>(<Link to={"/restaurantsMenu/"+res.info.id} key={res.info.id} className='linkCard'><RestaurantCard  resData={res}/></Link>))
        }
   
        
      </div>
    </div>
  )
}

export default Body