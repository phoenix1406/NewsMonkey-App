import React from 'react'
import loading from '../loading.gif'

const Spinner = (props)=> {
     return (
      <div className='text-center'>
        <img  id ="spinnerImg" src= {loading} alt="loading" srcSet="" />
      </div>
    )
  
}

export default Spinner
