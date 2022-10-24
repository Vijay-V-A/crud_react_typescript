import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../StateManagement/ReduxHook";
import { FormEmpty, ModalShow } from "../StateManagement/Reducers/PostState";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const [ScrollPosition, SetScrollPosition] = useState<number>(0);
  const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  const open = useAppSelector((state) => state.Posts.Modal);

  const HandleScroll = () => {
    SetScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <div
      className={
        ScrollPosition > 25
          ? open
            ? "relative bg-white sticky top-0 mb-10 w-full md:w-auto shadow-md"
            : "relative bg-white sticky top-0 z-30 mb-10 w-full md:w-auto shadow-md"
          : open
          ? "relative bg-white sticky top-0 mb-10 w-full md:w-auto"
          : "relative bg-white sticky top-0 z-30 mb-10 w-full md:w-auto"
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={
            ScrollPosition > 25
              ? "flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10"
              : "flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
          }
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 text-3xl">
              Dashboard
            </p>
            <h1 className="invisible">{String(open)}</h1>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <button
              onClick={() => {
                dispatch(ModalShow());
                dispatch(FormEmpty());
                setButtonDisabled((PrevState) => !PrevState);
                setTimeout(() => {
                  setButtonDisabled((PrevState) => !PrevState);
                }, 2000);
              }}
              className={
                ButtonDisabled
                  ? " cursor-not-allowed ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  : "ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              }
              disabled={ButtonDisabled}
            >
              Add Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
