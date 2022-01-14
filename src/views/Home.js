import React from 'react';
import { Box, Container } from '@material-ui/core';
import AlertProduct from '../components/Products/AlertProduct';
import GridProducts from '../components/Products/GridProducts';

const Home = () => {
    return (
        <>
            <Container>
                <Box my={10}>
                    <AlertProduct />
                    <GridProducts />
                </Box>
            </Container>
        </>
    )
}

export default Home
