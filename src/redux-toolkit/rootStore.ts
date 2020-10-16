
import { configureStore } from "@reduxjs/toolkit";
import addformReducer from "./form/formSlice"
import { reducer as formReducer } from 'redux-form';

const store = configureStore({
  reducer: {
    form: formReducer,
    addform: addformReducer,
  },
});

export default store;