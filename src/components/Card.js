import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({title}) {
    return (
            <Link to="/Create" className='card-link'>
            <div className='card-parant'>
                <div className="card "> 
                    <img src="/pics/food.jpg" className="card-img-top" alt="img" />
                    <div className="card-body">
                        <p>category</p>
                        <h3>{title}</h3>
                        <p>Author:author</p>
                        <p className="card-text">story</p>
                        

                    </div>
                </div>
            </div>
            </Link>
    )
}
