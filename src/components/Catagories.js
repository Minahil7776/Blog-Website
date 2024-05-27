import React from 'react'
import { Link } from 'react-router-dom'

export default function Catagories() {
  return (
    <div className='catagories'>
      <ul>
        <li><Link className='link'>All Catagories</Link></li>
        <li><Link className='link'>Music</Link></li>
        <li><Link className='link'>Movie</Link></li>
        <li><Link className='link'>Sports</Link></li>
        <li><Link className='link'>Coding</Link></li>
        <li><Link className='link'>Food</Link></li>
      </ul>
    </div>
  )
}
