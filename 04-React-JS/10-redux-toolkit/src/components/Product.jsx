import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../config/reduxconfig/reducers/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const dispatch = useDispatch()

  const addItemtoRedux = (id)=>{
    console.log(products[id]);
    dispatch(addProduct({item: products[id]}))

    
  }

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' , marginTop: '50px' }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              borderRadius: '8px'
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong> <br /><br />
            <button onClick={()=>addItemtoRedux(product.id)}>add To cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
