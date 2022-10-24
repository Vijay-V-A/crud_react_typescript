import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export interface PostStateData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostState {
  Posts: PostStateData[];
  OnePost: PostStateData | null;
  loading: boolean;
  Modal: boolean;
  Refresh: any;
}

const initialState: PostState = {
  Posts: [],
  OnePost: null,
  loading: false,
  Modal: false,
  Refresh: "",
};

export const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    GetPost: (state) => {
      state.loading = true;
    },
    SetPost: (state, action: PayloadAction<any>) => {
      state.Posts = action.payload;
      state.loading = false;
    },
    GetOnePost: (state, action: PayloadAction<any>) => {
      return state;
    },
    SetOnePost: (state, action: PayloadAction<any>) => {
      state.OnePost = action.payload;
    },
    AddPost: (state, action: PayloadAction<any>) => {
      return state;
    },
    UpdatePost: (state, action: PayloadAction<any>) => {
      return state;
    },
    DeletePost: (state, action: PayloadAction<any>) => {
      return state;
    },
    ModalShow: (state) => {
      state.Modal = !state.Modal;
    },
    FormEmpty: (state) => {
      state.OnePost = { id: 0, userId: 1, title: "", body: "" };
    },
    Refresh: (state, action: PayloadAction<any>) => {
      state.Refresh = action.payload;

      if (action.payload === 1) toast("Post Added Successfully");
      if (action.payload === 2) toast("Post Updated Successfully");
      if (action.payload === 3) toast("Post Deleted Successfully");
    },
  },
});

export const {
  GetPost,
  SetPost,
  GetOnePost,
  SetOnePost,
  AddPost,
  UpdatePost,
  DeletePost,
  ModalShow,
  FormEmpty,
  Refresh,
} = PostSlice.actions;

export default PostSlice.reducer;
