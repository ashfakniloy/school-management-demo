import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import usersReducer from "../features/admin/usersSlice";

export const combinedReducers = combineReducers({
  users: usersReducer,
});

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       users: {
//         users: action.payload.users.users,
//       },
//     };
//     return nextState;
//   } else {
//     return combinedReducers(state, action);
//   }
// };

export const makeStore = () =>
  configureStore({
    // reducer: masterReducer,
    reducer: combinedReducers,
  });

export const wrapper = createWrapper(makeStore);