import React from 'react';
import { Route } from 'react-router-dom';
import Responsive from "./components/common/Responsive";
import ItemListPage from "./pages/ItemListPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemWritePage from "./pages/ItemWritePage";
import {indexPath, itemDetailPath, itemListPath, newItemPath} from "./lib/paths";

function App() {
  return (
    <Responsive>
      <Route component={ItemListPage} path={[indexPath, itemListPath]} exact/>
      <Route component={ItemDetailPage} path={itemDetailPath} exact/>
      <Route component={ItemWritePage} path={newItemPath} exact/>
    </Responsive>
  );
}

export default App;
