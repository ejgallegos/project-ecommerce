import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from './components/Header/NavBar';
import GridProducts from './components/Products/GridProducts';
import Footer from './components/Footer/Footer';

import AlertProduct from './components/Products/AlertProduct';


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={10}>
          <AlertProduct />
          <GridProducts />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
