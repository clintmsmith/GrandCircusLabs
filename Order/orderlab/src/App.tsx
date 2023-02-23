import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MenuList } from './components/MenuList/MenuList';
import { Sidebar } from './components/Sidebar/Sidebar';
import OrderContextProvider from './context/OrderContextProvider';

function App() {
  return (
      <div className="App">
        <OrderContextProvider>
          <Header />
          <div className="container-main">
            <MenuList />
            <Sidebar />
          </div>
      </OrderContextProvider>
      </div>
  );
}

export default App;
