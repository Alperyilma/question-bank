import React from 'react';
import ProductList from '../pages/ProductList';
import Categories from './Categories';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Routes,Route } from 'react-router-dom';



export default function Dashboard() {
  return <div>
    <Grid>
      <GridRow>
        <GridColumn width={3}>
        <Categories/>
        </GridColumn>
        <GridColumn width={13}>
        <Routes>
          <Route exact path='/' element={<ProductList/>}/>
          <Route exact path='/products' element={<ProductList/>}/>
        </Routes>
        </GridColumn>
      </GridRow>
    </Grid>
  </div>;
}
