import { nanoid } from "@reduxjs/toolkit";
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga-test-plan/matchers";

import { SetPost } from "../../StateManagement/Reducers/PostState";

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
  title: "first test",
  body: nanoid(),
};

describe("Saga Worker And Apis Test", () => {
  test("GetPostApi Test", async () =>
    expectSaga(GetPostApi)
      .provide([[call(GetPost_Api), ResultPosts]])
      .put(SetPost(ResultPosts))
      .run(false));

  test("GetOnePostApi Test", async () =>
    expectSaga(GetOnePostApi, payload.id)
      .provide([[call(GetOnePost_Api), payload.id]])
      .run(false));

  test("AddPostApi Test", async () =>
    expectSaga(AddPostApi, ResultPost)
      .provide([[call(AddPost_Api), ResultPost]])
      .run(false));

  test("UpdatePostApi Test", async () =>
    expectSaga(UpdatePostApi, ResultPost)
      .provide([[call(UpdatePost_Api), payload.id]])
      .run(false));

  test("DeletePostApi Test", async () =>
    expectSaga(DeletePostApi, 1)
      .provide([[call(DeletePost_Api), 1]])
      .run(false));
});
