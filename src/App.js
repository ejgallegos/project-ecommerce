import React from 'react';
import NavBar from './components/Header/NavBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer/Footer';
import ProductView from './views/Products/ProductView';
import PurchaseView from './views/Products/PurchaseView';


const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path={"/purchase"} exact component={PurchaseView} />
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
