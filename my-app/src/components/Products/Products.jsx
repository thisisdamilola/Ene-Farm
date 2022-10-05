import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles'

const products = [
    { id: 1, name: 'Eggs', description: 'Farm fresh Eggs', price: 'N 1200', image: './image/egg.jpeg', },
    { id: 2, name: 'Potatoes', description: 'Farm fresh Irish Potatoes', price: 'N 3500', image: './image/irish.jpeg'},
];

const Products = () => {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.toolbar } />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => ( <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
                </Grid>
            ))}
        </Grid>
       </main>
    )
    
}

export default Products;