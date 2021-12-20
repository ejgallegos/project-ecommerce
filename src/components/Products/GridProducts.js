import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';


import listProd from '../../examples/products.json';
import Product from './Product';

const useStyles = makeStyles(styles);

const GridProducts = () => {
    const classes = useStyles();
    const products = listProd.products;

    return (
        <>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Products
                </Typography>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {products.map((prod, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                            <Product item={prod} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </>
    );
}

export default GridProducts;
