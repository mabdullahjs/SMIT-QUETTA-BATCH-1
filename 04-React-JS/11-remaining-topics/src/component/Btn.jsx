import React, { memo } from 'react'

const Btn = memo(({title , func}) => {
    console.log('button component rendered');
    
  return (
    <>
    <button>{title} {func()}</button>
    </>
  )
})

export default Btn