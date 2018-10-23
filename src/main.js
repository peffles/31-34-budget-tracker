import React from 'react';
import { createStore } from 'redux';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import categoryReducer from './reducers/category';
import './style/main.scss';

const store = createStore(categoryReducer);

const appContainer = document.createElement('div');
document.body.appendChild(appContainer);
ReactDom.render(<Provider store={store}><App/></Provider>, appContainer);
