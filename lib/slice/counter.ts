import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

// [Next.js + TypeScriptのプロジェクトにReduxを導入する](https://qiita.com/keitakn/items/7433c89ce52073e861a1)

export type CounterState = {
  count: number
  loading: boolean
  error: boolean
  errorMessage: string
}

export const initialState: CounterState = {
  count: 0,
  loading: false,
  error: false,
  errorMessage: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrementCounter: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count - action.payload,
    }),
  },
  // extraReducers: (builder) => {
  //   builder.addCase(asyncIncrementCounter.pending, (state) => {
  //     return {
  //       ...state,
  //       loading: true,
  //       error: false,
  //       errorMessage: '',
  //     };
  //   });
  //   builder.addCase(
  //     asyncIncrementCounter.rejected,
  //     (state, action: any/*RejectedAction<number>*/) => {
  //       return {
  //         ...state,
  //         loading: false,
  //         error: true,
  //         errorMessage: action.error.message,
  //       };
  //     },
  //   );
  //   builder.addCase(
  //     asyncIncrementCounter.fulfilled,
  //     (state, action: PayloadAction<number>) => {
  //       return {
  //         ...state,
  //         count: state.count + action.payload,
  //         loading: false,
  //         error: false,
  //         errorMessage: '',
  //       };
  //     },
  //   );
  // },
})

// const asyncIncrementCounter = createAsyncThunk<number, number>(
//   'counter/asyncIncrementCounter',
//   async (arg: number): Promise<number> => {
//     return arg;
//   },
// );