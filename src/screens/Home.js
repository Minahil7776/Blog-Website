import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Footer from '../components/Footer'
import BlogBtn from '../components/BlogBtn'
import Catagories from '../components/Catagories'
import { useLocation } from 'react-router-dom'

export default function Home({title}) {
  return (
    <div className='bg-dark text-light'>
      {/* Navbar */}
      <div className='bg-success text-light'><Navbar /></div>
      {/* Carousel */}
      <div><Carousel /></div>
      <br></br>
      {/* Blog btn */}
      <div className='home-container'>
        <div className="left">
          <BlogBtn />
          {/* catagories */}
          <div><Catagories /></div>
        </div>
        {/* card */}
        <div className="right card-container">
        <Card title={title} />
        </div>
      </div>
      {/* Footer */}
      <div><Footer /></div>
    </div>

  )
}
