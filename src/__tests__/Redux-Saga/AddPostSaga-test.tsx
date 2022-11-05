import { nanoid } from "@reduxjs/toolkit";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import { call } from "redux-saga-test-plan/matchers";

import {
  SetPost,
  SetOnePost,
  Refresh,
} from "../../StateManagement/Reducers/PostState";

import {
  GetPostApi,
  GetOnePostApi,
  AddPostApi,
  UpdatePostApi,
  DeletePostApi,
} from "../../Middleware/AddPost/AddPostSagaWorker";

import {
  GetPost_Api,
  GetOnePost_Api,
  AddPost_Api,
  UpdatePost_Api,
  DeletePost_Api,
} from "../../Middleware/api";

import { PostStateData } from "../../StateManagement/Reducers/PostState";

const ResultPosts: PostStateData[] = [
  { id: 1, userId: 1, title: "first test", body: nanoid() },
  { id: 2, userId: 1, title: "second test", body: nanoid() },
  { id: 3, userId: 1, title: "third test", body: nanoid() },
  { id: 4, userId: 1, title: "fourth test", body: nanoid() },
  { id: 5, userId: 1, title: "fifth test", body: nanoid() },
];

const payload = { id: 5 };

const ResultPost: PostStateData = {
  id: 1,
  userId: 1,
  title: "The title value",
  body: nanoid(),
};

const error = new Error("Api Response Failed");

describe("Saga Worker And Apis Test", () => {
  test("GetPostApi Test Success", async () =>
    expectSaga(GetPostApi)
      .provide([[call(GetPost_Api), ResultPosts]])
      .put(SetPost(ResultPosts))
      .run(false));

  test("GetPostApi Test Failure", async () =>
    expectSaga(GetPostApi)
      .provide([[call(GetPost_Api), throwError(error)]])
      .run(false));

  test("GetOnePostApi Test", async () =>
    expectSaga(GetOnePostApi, 12)
      .provide([[call(GetOnePost_Api), 12]])
      // .put(SetOnePost(ResultPost))
      .run(false));

  test("GetOnePostApi Test Failure", async () =>
    expectSaga(GetOnePostApi, 12)
      .provide([[call(GetOnePost_Api), throwError(error)]])
      .run(false));

  test("AddPostApi Test", async () =>
    expectSaga(AddPostApi, ResultPost)
      .provide([[call(AddPost_Api), ResultPost]])
      .run(false));

  test("UpdatePostApi Test", async () =>
    expectSaga(UpdatePostApi, ResultPost)
      .provide([[call(UpdatePost_Api), payload.id]])
      .run(false));

  test("DeletePostApi Test Success", async () =>
    expectSaga(DeletePostApi, 1)
      .provide([[call(DeletePost_Api), 1]])
      .run(false));

  test("DeletePostApi Test Failure", async () =>
    expectSaga(DeletePostApi, 1)
      .provide([[call(DeletePost_Api), throwError(error)]])
      .run(false));
});
