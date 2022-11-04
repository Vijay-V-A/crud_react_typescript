import { FC } from "react";
import { useAppDispatch } from "../StateManagement/ReduxHook";
import {
  GetOnePost,
  ModalShow,
  DeletePost,
} from "../StateManagement/Reducers/PostState";
import { PostStateData } from "../StateManagement/Reducers/PostState";

interface PostsProps {
  Posts: PostStateData[] | null;
}

const Table: FC<PostsProps> = ({ Posts }) => {
  const dispatch = useAppDispatch();

  const HandleEdit = (row: any) => {
    dispatch(ModalShow());
    dispatch(GetOnePost(row));
  };

  const HandleDelete = (id: any) => {
    if (window.confirm(`Are you sure want to delete id : ${id} ?`))
      dispatch(DeletePost(id));
  };

  return (
    <>
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-x-auto relative shadow-md sm:rounded-sm">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-base font-medium text-gray-500"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-base font-medium text-gray-500"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-base font-medium text-gray-500"
                  >
                    Body
                  </th>

                  <th
                    scope="col"
                    className="py-3 px-6 text-base font-medium text-gray-500 text-center w-48"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Posts?.length !== 0 && Posts ? (
                  <>
                    {Posts.map((row, index) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        key={index + 1}
                      >
                        <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {row.id}
                        </td>
                        <td className="py-4 px-6">{row.title}</td>
                        <td className="py-4 px-6">{row.body}</td>

                        <td className="py-4 px-6 text-center">
                          <button
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5"
                            onClick={() => HandleEdit(row)}
                          >
                            Edit
                          </button>
                          <button
                            className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                            onClick={() => HandleDelete(row.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td
                      colSpan={4}
                      className="py-4 px-6 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      No data Found...!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
