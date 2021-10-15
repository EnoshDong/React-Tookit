// 1.引入依赖库
// 1.1.React|React-DOM|Redux|React-Redux|Axios|Rredux-Toolkit
import { useEffect, } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
// 1.2.Core Components
import { increment, decrement, asyncIncrement, asyncDecrement, } from './store/features/counterSlice';
import { loadData } from './store/features/movieSlice';

// 2.创建项目主页面
const App = () => {
  // 2.1.定义或引入变量及数据
  // const { count } = useSelector( (state) => { state.counter;} );
  const { count } = useSelector(state => state.counter);
  const { list } = useSelector(state => state.movie);
  const dispatch = useDispatch();
  // 2.2.App组件初始化后直接执行
  useEffect(() => {
    // 2.2.1.获取影片数据
    dispatch(loadData());
  }, []);
  // 2.3.返回虚拟DOM
  return (
    <div className="App">
      <span>{count}</span>
      <hr />
      <button
        onClick={() => {
          // 2.1.派发初始方法调用加1
          // dispatch(increment());
          // 2.2.派发自定义增加step
          dispatch(increment({ step: 1, }));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch(decrement());
          dispatch(decrement({ step: 1, }));
        }}
      >
        -
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(asyncIncrement());
        }}
      >
        异步+
      </button>
      <button
        onClick={() => {
          dispatch(asyncDecrement({ step: 3, }));
        }}
      >
        异步-
      </button>
      <hr />
      <ul>
        {/* {list.map((item, index)=> {
          <li key={index}>{item.name}</li>
        })} */}
        {list.map(item => <li key={item.tvId}>{item.name}</li>)}
      </ul>
    </div>
  );
};

// 3.导出项目主页面
export default App;
