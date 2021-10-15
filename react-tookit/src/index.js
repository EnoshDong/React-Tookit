// 1.引入依赖库
// 1.1.React|React-DOM|Redux|React-Redux|Axios|Redux-Toolkit
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, }  from 'react-redux';
// 1.2.Core Components
import App from './App';
import store from './store';
// 1.3.Theme|ICON|Style|Type
import './index.css';

// 2.渲染虚拟DOM到页面中
// {/* <React.StrictMode></React.StrictMode> */} 启动严格模式
ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);