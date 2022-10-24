import { all } from "redux-saga/effects";

import {
  GetPosts,
  GetOnePosts,
  AddPosts,
  UpdatePosts,
  DeletePosts,
} from "./AddPost/AddPostSagaWatcher";

export default function* rootSaga() {
  yield all([
    GetPosts(),
    GetOnePosts(),
    AddPosts(),
    UpdatePosts(),
    DeletePosts(),
  ]);
}
