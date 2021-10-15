// 1.引入依赖库
// 1.1.React|React-DOM|Redux|React-Redux|Axios|Redux-Toolkit
// createAsyncThunk创建一个异步的action，这个方法被触发的时候会有三个状态：pending（进行中）、fulfilled（成功）、rejected（失败）。
import { createSlice, createAsyncThunk, }  from '@reduxjs/toolkit';
// 1.2.Core Components
import { increment, } from './counterSlice';

// 2.发起网络请求获取数据
// 2.1.定义获取爱奇艺后台影片数据的方法
const loadMoviesAPI = () => {
  fetch("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48")
  .then((response) => {
    response.json();
  });
};
// 2.2.这个action是可以直接调用的，用来异步操作获取数据
export const loadData = createAsyncThunk("movie/loadData", async() => {
  const response = await loadMoviesAPI();
  // 2.2.1.此处的返回结果会在 .fulfilled中作为pyload的值
  return response;
});

// 2.创建切片并导出
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    list: [],
    totals: 0,
  },
  reducers: {
    loadDataEnd(state, { payload, }) {
      // console.log("state.list：", state.list);
      // console.log("state.totals：", state.totals);
      state.list = payload;
      state.totals = payload.length;
    },
  },
  // 2.1.可以额外地触发其他Slice中的数据关联改变：与counterSlice做关联
  extraReducers: {
    [increment](state, payload) {
      // state.list.push(1);
      // state.totals += 1;
    },
    [loadData.pending](state) {
      console.log("进行中...");
    },
    [loadData.fulfilled](state, { payload, }) {
      console.log("payload：", payload);
      state.list = payload.data.list;
    },
    [loadData.rejected](state, err) {
      console.log("err：", err);
    },
  },
});

// 3.导出actions和reducer
export const { loadDataEnd, } = movieSlice.actions;
export default movieSlice.reducer;
