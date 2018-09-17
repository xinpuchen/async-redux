import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import AsyncApp from './AsyncApp';

const store = configureStore();

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store} >
        <AsyncApp />
      </Provider>
    )
  }
}