import React from 'react';
import { Route } from 'react-router-dom';
import Responsive from "./components/common/Responsive";
import ItemListPage from "./pages/ItemListPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemWritePage from "./pages/ItemWritePage";

function App() {
  return (
    <Responsive>
      <Route component={ItemListPage} path={['/', '/items']} exact/>
      <Route component={ItemDetailPage} path={'/items/:id'} exact/>
      <Route component={ItemWritePage} path={'/items/new'} exact/>
    </Responsive>
  );
}

export default App;
