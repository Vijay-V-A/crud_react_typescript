import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../Middleware";
import PostState from "./Reducers/PostState";

const Saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    Posts: PostState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(Saga),
  devTools: process.env.NODE_ENV === "development",
});

Saga.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
