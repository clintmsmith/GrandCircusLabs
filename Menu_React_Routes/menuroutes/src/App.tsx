import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { MenuList } from './components/MenuList/MenuList';
import { DetailsRoute } from './components/Routes/DetailsRoute';
import { Sidebar } from './components/Sidebar/Sidebar';
import OrderContextProvider from './context/OrderContextProvider';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <OrderContextProvider>
          <Header />
          <Routes>
          <div className="container-main">
            <Route path="/menu" element={<MenuList />} />
            <Route path="/details/:id" element={<DetailsRoute />} />
            <Route path="/menu" element={<Sidebar />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </div>
          </Routes>
      </OrderContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
