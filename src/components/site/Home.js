import React from 'react'
import Boxlist from './Home/Boxlist'
import Productlist from './Home/Productlist'
import Slider from './Home/Slider'
import Newsletter from './Home/Newsletter'


function Home() {
    return (
        <>
            <Slider></Slider>
            <Boxlist></Boxlist>
            <Productlist></Productlist>
            <Newsletter></Newsletter>
      </>
    )
}

export default Home
