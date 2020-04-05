const fetchUrl = (url: string): Promise<any> => {
  return new Promise((resolve, reject) =>
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject)
  );
};

export default {
  getCommentsForPost: (postId: number): Promise<Comment[]> =>
    fetchUrl(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
  getPosts: (): Promise<Post[]> => fetchUrl(`https://jsonplaceholder.typicode.com/posts`),
  getUsers: (): Promise<User[]> => fetchUrl(`https://jsonplaceholder.typicode.com/users`),
};
