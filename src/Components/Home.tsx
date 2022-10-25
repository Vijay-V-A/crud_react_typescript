import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../StateManagement/ReduxHook";
import { GetPost } from "../StateManagement/Reducers/PostState";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddPost from "./AddPost";
import Headers from "./Header";
import Table from "./PostsTable";
import Loader from "./Loader";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const Loading = useAppSelector((state) => state.Posts.loading);
  const open = useAppSelector((state) => state.Posts.Modal);
  const OnePost = useAppSelector((state) => state.Posts.OnePost);

  useEffect(() => {
    dispatch(GetPost());
  }, [dispatch]);
  console.log(OnePost);
  return (
    <div className="mb-10" data-testid="Main-Sub">
      <Headers />
      {!Loading ? <Table /> : <Loader />}
      <AddPost ModalShow={open} OnePost={OnePost} />
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Home;
