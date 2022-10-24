import { call, put } from "redux-saga/effects";
import {
  GetPost_Api,
  GetOnePost_Api,
  AddPost_Api,
  UpdatePost_Api,
  DeletePost_Api,
} from "../api";
import {
  SetPost,
  SetOnePost,
  Refresh,
} from "../../StateManagement/Reducers/PostState";

export function* GetPostApi(): any {
  try {
    const res = yield call(GetPost_Api);
    yield put(SetPost(res));
  } catch (err) {
    console.log(err);
  }
}

export function* GetOnePostApi({ payload }: any): any {
  try {
    const res = yield call(GetOnePost_Api, payload.id);
    yield put(SetOnePost(res));
  } catch (err) {
    console.log(err);
  }
}

export function* AddPostApi({ payload }: any): any {
  try {
    const res = yield call(AddPost_Api, payload);
    if (res.id > 100) yield put(Refresh(1));
  } catch (err) {
    console.log(err);
  }
}

export function* UpdatePostApi({ payload }: any): any {
  try {
    const res = yield call(UpdatePost_Api, payload);
    if (res.id == payload.id) yield put(Refresh(2));
  } catch (err) {
    console.log(err);
  }
}

export function* DeletePostApi({ payload }: any): any {
  try {
    yield call(DeletePost_Api, payload);
    yield put(Refresh(3));
  } catch (err) {
    console.log(err);
  }
}
