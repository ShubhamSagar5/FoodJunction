import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantsInfo } from '../utilis/MockData'
import Shimmer from './Shimmer'

const Body = () => {
  
  const [resData ,setResData] = useState(restaurantsInfo)
  
  const [filterRes,setFilterRes] = useState(restaurantsInfo)

  const [searchText,setSearchText] = useState('')
  // const fetchData = async () => {
  //   const ResDataAPI = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.9974533&lng=73.78980229999999")
  //   const data = await ResDataAPI.json()
  //   setResData(data.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants      )
  //   // setResData(data?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  // }

// useEffect(()=>{
//   fetchData()
// },[])
  


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
          <button onClick={()=>{setFilterRes(restaurantsInfo)}}>All Restaurants</button>
        </div>
        <div className='topRatedBtn'>
                  <button onClick={handleTopRated}>Top reated Hotel</button>

        </div>
      </div>
      <div className='restaurantContainer'>
        {
        filterRes?.map((res)=>(<RestaurantCard key={res.info.id} resData={res}/>))
        }
   
        
      </div>
    </div>
  )
}

export default Body