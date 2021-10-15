// 1.引入依赖库
// 1.1.React|React-DOM|Redux|React-Redux|Axios|Redux-Toolkit
import { createSlice, }  from '@reduxjs/toolkit';

// 2.创建切片并导出
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 1,
    title: "redux toolkit preview",
  },
  reducers: {
    // 2.1.初始方法加1、减1
    // increment(state, action) {
    //   console.log("action：", action);
    //   // 内置了immutable数据类型
    //   // state.count = state.count + 1;
    //   state.count += 1;
    // },
    // decrement(state) {
    //   // state.count = state.count - 1;
    //   state.count -= 1;
    // },
    // 2.2.接收派发传值增step、减小step
    increment(state, { payload, }) {
      console.log("+payload.step：", payload.step);
      state.count = state.count + payload.step;
    },
    decrement(state, { payload, }) {
      console.log("-payload.step：", payload.step);
      state.count = state.count - payload.step;
    },
  },
});

// 3.导出同步与异步actions和reducer
export const { increment, decrement } = counterSlice.actions;
export const asyncIncrement = () => dispatch => {
  setTimeout(() => {
    dispatch(increment({ step: 3, }));
  }, 2000);
};
export const asyncDecrement = (payload) => dispatch => {
  setTimeout(() => {
    dispatch(decrement(payload));
  }, 2000);
};
export default counterSlice.reducer;