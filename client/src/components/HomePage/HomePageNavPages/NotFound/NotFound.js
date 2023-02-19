import React from 'react'
import "./NotFound.css"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="not-found">
            <button onClick={() => navigate(-1)}>Go back</button>
            <h1>NOT FOUND ,
        PLEASE FIND YOUR WAY BACK
    </h1>


    </div>
   
 )
}

export default NotFound