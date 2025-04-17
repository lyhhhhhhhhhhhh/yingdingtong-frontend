import {createSlice} from "@reduxjs/toolkit";
import {DEFAULT_MOVIE_ORDER} from "@/constants/MovieOrder";


// Redux 初始状态
/**
 * 生成订单
 */

//TODO 设置redux有效期 15分钟 或者说监听器 如果 isPayfor字段为true 则清除
export const movieOrderSlice = createSlice({
    //名称
    name: "movieOrder",
    //初始化数据
    initialState: DEFAULT_MOVIE_ORDER,
    //这是reducers函数 接受
    reducers: {
        setMovieOrder: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        clearMovieOrder: (state) => {
            return DEFAULT_MOVIE_ORDER;
        }
    },
});

// 修改状态
// 每个 case reducer 函数会生成对应的 Action creators
export const {setMovieOrder} = movieOrderSlice.actions;

export default movieOrderSlice.reducer;

