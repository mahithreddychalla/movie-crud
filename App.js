import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import List from './components/List';
import Input from './components/Input';
import './App.css';
const App = () => (
  <Provider store={store}>
    <h2>Movies Review</h2>
    <Input/>
    <List />
  </Provider>
);

export default App;