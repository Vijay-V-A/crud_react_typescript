import {
  FC,
  Fragment,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAppDispatch } from "../StateManagement/ReduxHook";
import { AddPost, UpdatePost } from "../StateManagement/Reducers/PostState";
import { ModalShow } from "../StateManagement/Reducers/PostState";
import Loader from "./Loader";
interface OnePosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostProps {
  ModalShow: boolean;
  OnePost: OnePosts | null;
}

const AddPosts: FC<PostProps> = (props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [Post, setPost] = useState<{
    id: number;
    title: string;
    body: string;
  }>({
    id: 0,
    title: "",
    body: "",
  });
  const [ButtonDisabled, setButtonDisabled] = useState<boolean>(false);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...Post, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonDisabled((PrevState) => !PrevState);
    setTimeout(() => {
      setButtonDisabled((PrevState) => !PrevState);
    }, 2000);
    if (Post.id === 0) dispatch(AddPost(Post));
    else dispatch(UpdatePost(Post));

    setPost({
      id: 0,
      title: "",
      body: "",
    });
    dispatch(ModalShow());
  };

  useEffect(() => {
    if (props.OnePost !== null)
      setPost({
        ...Post,
        id: Number(props.OnePost.id),
        title: props.OnePost.title,
        body: props.OnePost.body,
      });
    else
      setPost({
        id: 0,
        title: "",
        body: "",
      });
    return () => {
      setPost({
        id: 0,
        title: "",
        body: "",
      });
    };
  }, [props.OnePost]);

  return (
    <Transition.Root show={props.ModalShow} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => dispatch(ModalShow())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                {props.OnePost !== null ? (
                  <form
                    className="w-full max-w-lg"
                    onSubmit={(e) => HandleSubmit(e)}
                  >
                    <div className="bg-gray-50 px-4 py-3 sm:flex  sm:px-6">
                      <h3 className="whitespace-nowrap text-base font-medium text-2xl text-gray-500 hover:text-gray-900">
                        {Post.id === 0 ? " Add Post" : "Update Post"}
                      </h3>
                    </div>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label className="block tracking-wide text-gray-500 text-lg font-bold mb-2">
                            Title
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            value={Post.title}
                            name="title"
                            role="in_1"
                            required
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              HandleChange(e)
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label className="block  tracking-wide text-gray-500 text-lg font-bold mb-2">
                            Body
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            value={Post.body}
                            name="body"
                            required
                            role="in_2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              HandleChange(e)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className={
                          ButtonDisabled
                            ? "cursor-not-allowed	inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gren-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            : "inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gren-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        }
                        disabled={ButtonDisabled}
                      >
                        {Post.id === 0 ? "Submit" : "Update"}
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => dispatch(ModalShow())}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <Loader />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddPosts;
