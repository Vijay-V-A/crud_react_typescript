export const GetPost_Api = async () =>
  await fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );

export const GetOnePost_Api = async (id: number) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );

export const AddPost_Api = async (data: any) =>
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      body: data.body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());

export const UpdatePost_Api = async (data: any) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      body: data.body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());

export const DeletePost_Api = async (id: number) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
