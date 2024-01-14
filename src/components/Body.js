import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>
        <h2>Search</h2>
      </div>
      <div className='restaurantContainer'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>

        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        
      </div>
    </div>
  )
}

export default Body