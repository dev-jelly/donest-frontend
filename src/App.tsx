import React, {createContext} from 'react';
import { Route } from 'react-router-dom';
import Responsive from "./components/common/Responsive";
import ItemListPage from "./pages/ItemListPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemWritePage from "./pages/ItemWritePage";
import {indexPath, itemDetailPath, itemListPath, newItemPath} from "./lib/paths";

export const DonestContext = createContext({});

function App() {
  return (
    <DonestContext.Provider value={{}}>
      <Responsive>
        <Route component={ItemListPage} path={[indexPath, itemListPath]} exact/>
        <Route component={ItemDetailPage} path={itemDetailPath} exact/>
        <Route component={ItemWritePage} path={newItemPath} exact/>
      </Responsive>
    </DonestContext.Provider>
  );
}

export default App;
