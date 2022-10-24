import { takeLatest } from "redux-saga/effects";
import {
  GetPost,
  GetOnePost,
  AddPost,
  UpdatePost,
  DeletePost,
} from "../../StateManagement/Reducers/PostState";
import {
  GetPostApi,
  GetOnePostApi,
  AddPostApi,
  UpdatePostApi,
  DeletePostApi,
} from "./AddPostSagaWorker";

export function* GetPosts() {
  yield takeLatest(GetPost.type, GetPostApi);
}

export function* GetOnePosts() {
  yield takeLatest(GetOnePost.type, GetOnePostApi);
}

export function* AddPosts() {
  yield takeLatest(AddPost.type, AddPostApi);
}

export function* UpdatePosts() {
  yield takeLatest(UpdatePost.type, UpdatePostApi);
}

export function* DeletePosts() {
  yield takeLatest(DeletePost.type, DeletePostApi);
}
