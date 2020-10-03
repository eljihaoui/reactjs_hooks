import React from 'react';
import AddProduct from './components/AddProduct';
import Menu from './components/Menu';
import Products from './components/Products';
import './App.css';
function App() {
  return (

    <div className="App">
      <Menu title="React Hooks"/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <AddProduct />
          </div>
          <div className="col-8">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
