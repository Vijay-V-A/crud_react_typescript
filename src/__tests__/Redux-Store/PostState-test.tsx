import Reducer, {
  SetPost,
  GetOnePost,
  SetOnePost,
  AddPost,
  UpdatePost,
  DeletePost,
  Refresh,
} from "../../StateManagement/Reducers/PostState";

import Store from "../../StateManagement/store";

const TempPosts = [
  { id: 1, userId: 1, body: "post1", title: "post1" },
  { id: 2, userId: 1, body: "post2", title: "post2" },
];

const TempPost = { id: 1, userId: 1, body: "post1", title: "post1" };

describe("Test Inital State Values", () => {
  test("Posts Value", () => {
    const State = Store.getState().Posts;
    expect(State.Posts.length).toEqual(0);
    expect(State.OnePost).toEqual(null);
    expect(State.loading).toEqual(false);
    expect(State.Modal).toEqual(false);
    expect(State.Refresh).toEqual("");
  });
});

describe("Test All Reducers and Updated State Values", () => {
  test("setPost Action Test", () => {
    const initialState = undefined;

    const Action = SetPost(TempPosts);
    const result = Reducer(initialState, Action);
    expect(Object.keys(result.Posts).length).toEqual(TempPosts.length);
    expect(result.Posts).toEqual(TempPosts);
  });

  test("GetOnePost Action Test", () => {
    const initialState = undefined;

    const Action = GetOnePost(1);
    const result = Reducer(initialState, Action);

    expect(result.OnePost).toEqual(null);
  });

  test("SetOnePost Action Test", () => {
    const initialState = undefined;

    const Action = SetOnePost(TempPost);
    const result = Reducer(initialState, Action);

    expect(result.OnePost).toEqual(TempPost);
  });

  test("AddPost Action Test", () => {
    const initialState = undefined;

    const Action = AddPost(TempPost);
    const result = Reducer(initialState, Action);

    expect(result.Posts.length).toEqual(0);
  });

  test("UpdatePost Action Test", () => {
    const initialState = undefined;

    const Action = UpdatePost(TempPost);
    const result = Reducer(initialState, Action);

    expect(result.Posts.length).toEqual(0);
  });

  test("DeletePost Action Test", () => {
    const initialState = undefined;

    const Action = DeletePost(1);
    const result = Reducer(initialState, Action);

    expect(result.Posts.length).toEqual(0);
  });

  test("Refresh Action Post Added", () => {
    const initialState = undefined;

    const Action = Refresh(1);
    const result = Reducer(initialState, Action);

    expect(result.Refresh).toEqual(1);
  });

  test("Refresh Action Post Updated", () => {
    const initialState = undefined;

    const Action = Refresh(2);
    const result = Reducer(initialState, Action);

    expect(result.Refresh).toEqual(2);
  });

  test("Refresh Action Post Deleted", () => {
    const initialState = undefined;

    const Action = Refresh(3);
    const result = Reducer(initialState, Action);

    expect(result.Refresh).toEqual(3);
  });
});
