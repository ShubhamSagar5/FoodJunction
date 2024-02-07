import React, { useContext, useEffect, useState } from 'react'
import RestaurantCard, { WithPromotedCard } from './RestaurantCard'
import { restaurantsInfo } from '../utilis/MockData'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utilis/OnlineStatus'
import UserContext from '../utilis/UserContext'

const Body = () => {
  
  const [resData ,setResData] = useState(restaurantsInfo)
  
  const [filterRes,setFilterRes] = useState(restaurantsInfo)

  const [searchText,setSearchText] = useState('')

  const onlineStatus = useOnlineStatus()

  const RestaurantPromotedCard = WithPromotedCard(RestaurantCard)

  const {loggedInUser,setUserName} = useContext(UserContext)


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
    setFilterRes(resData.filter((res)=> res.info.avgRating > 4.3))
  }
 
  const handleSeacrhFun = () => {
    const filterResList = resData.filter((res)=> res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    setFilterRes(filterResList)
  }


  if(onlineStatus === false) return <h1>You Are Like Offline Please Check Your Internet Connection</h1>

  if(resData.length === 0 ){
    return <Shimmer/>
  } 

  console.log(resData)

  return (
    <div className='body'>
      <div className='flex p-2 m-2 items-center'>
        <div className='searchContainer'>
            <input className='border border-black rounded-lg' type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={handleSeacrhFun} className='p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400'>Search</button>
        </div>
        <div className='topRatedBtn'>
          <button className='p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400' onClick={()=>{setFilterRes(resData)}}>All Restaurants</button>
        </div>
        <div className='topRatedBtn'>
                  <button className='p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-400' onClick={handleTopRated}>Top reated Hotel</button>

        </div>
        <div className=''>
          <label className='p-2 m-2'>User Name : </label>
          <input className='border border-black rounded-lg ' type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
        </div>
      </div>
      <div className='flex flex-wrap gap-7 m-3'>
        {
        filterRes?.map((res)=>(<Link to={"/restaurantsMenu/"+res.info.id} key={res.info.id} className='linkCard'>
        {
          res.info.veg ? <RestaurantPromotedCard  resData={res}/> :  <RestaurantCard  resData={res}/>
        }
       </Link>))
        }
   
        
      </div>
    </div>
  )
}

export default Body