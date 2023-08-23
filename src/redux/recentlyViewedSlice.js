import { createSlice} from "@reduxjs/toolkit";

const recentlyViewedInitialState = [];

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: recentlyViewedInitialState,
  reducers: {

    addRecentlyViewed: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, id, poster_path,){
        return{
          payload: {
            title, id, poster_path,
          },
        }
      }
    },


  },
})

export const { addRecentlyViewed } = recentlyViewedSlice.actions;

export const recentlyViewedReducer = recentlyViewedSlice.reducer;
