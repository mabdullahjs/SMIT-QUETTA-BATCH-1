import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const SingleProduct = () => {
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(console.log);
  }, [])
  return (
    <Typography variant='h1' sx={{
      textAlign: 'center'
    }}>Single Product {id}</Typography>
  )
}

export default SingleProduct