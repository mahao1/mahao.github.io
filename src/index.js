import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux'; //解构一个createStore 创建状态对象
import {Provider,connect} from 'react-redux';

import RouterConfig from './Router.config';
import defaultState from './store/state';
import reducer from './store/reducer';


//创建store实例对象
const store = createStore(reducer,defaultState);

ReactDom.render(
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
);
