import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import configreducer from "./configSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    config: configreducer,
    gpt: gptReducer,
  },
});
export default appStore;
