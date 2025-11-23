import React from 'react'

const Btn = ({func , name}) => {
    
  return (
    <>
    <button onClick={func}>{name}</button>
    </>
   
  )
}

export default Btn