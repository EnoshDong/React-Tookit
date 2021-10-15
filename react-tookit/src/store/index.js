// 1.引入依赖库
// 1.1.React|React-DOM|Redux|React-Redux|Axios|Rredux-Toolkit
import { configureStore, }  from '@reduxjs/toolkit';
// 1.2.Core Components
import counterSlice from './features/counterSlice';
import movieSlice from './features/movieSlice';

// 2.创建一个redux数据中心configureStore
export default configureStore({
  // 2.1.合并所有的reducer
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
  },
});
