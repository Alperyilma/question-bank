import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Routes,Route } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import Formulas from '../pages/Formulas';
import RegisterPage from '../pages/RegisterPage';
// import LoginPage from '../pages/LoginPage';
import LoginApp from '../pages/login/LoginApp';




export default function Dashboard() {



  return <div>
    <Grid>
      <GridRow>
        <GridColumn width={3}>
        <Categories/>
        </GridColumn>
        <GridColumn width={13}>
        <Routes>
          <Route exact path='/' element={<StartPage/>}/>
          <Route exact path='/products' element={<ProductList/>}/>
          <Route exact path='/formulas' element={<Formulas/>}/>
          <Route exact path='/register' element={<RegisterPage/>}/> 
          <Route exact path='/login' element={<LoginApp/>}/> 
        </Routes>
        </GridColumn>
      </GridRow>
    </Grid>
  </div>;
}
