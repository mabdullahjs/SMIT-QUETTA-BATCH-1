import { Alert, Box, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import MediaCard from '../components/Card';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);

        setProduct(res.products)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])
  return (
    <>
      {error && <Alert variant="filled" severity="error">
        Error agaya ha bhai!!!
      </Alert>}
      <Typography variant='h1' sx={{
        textAlign: 'center'
      }}>Our products</Typography>

      {loading && <Box sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}><CircularProgress enableTrackSlot size="3rem" /></Box>}
      <Grid container spacing={2} sx={{
        margin: '50px'
      }}>
        {product && product.map(item => {
          return <Grid key={item.id} size={4}><MediaCard thumbnail={item.thumbnail} description={item.description} title={item.title} id={item.id} /></Grid>
        })}
      </Grid>

      {/* <Grid container spacing={2}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid> */}


    </>
  )
}

export default Product