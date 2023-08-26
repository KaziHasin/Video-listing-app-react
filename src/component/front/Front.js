import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 flex-column'>

       <h1>This is the Front Of the app</h1>
       <Link to="/video">Video Here</Link>

    </div>
  )
}
