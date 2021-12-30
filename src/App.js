import React from 'react';
import Container from '@material-ui/core/Container';

import NavBar from './components/Header/NavBar';
import GridProducts from './components/Products/GridProducts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <GridProducts />
      </Container>
      <Footer />
    </>
  );
}

export default App;
