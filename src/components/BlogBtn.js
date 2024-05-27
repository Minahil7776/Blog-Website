import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogBtn() {
  return (
    <div>
        <Link to="/create" className='bg-success text-light blog-btn'>Create Blog</Link>
    </div>
  )
}
