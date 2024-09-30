import axios from "axios";

export default async function Page() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      {posts.map((post) => (
        <div
          className="post bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300"
          key={post.id}
        >
          <h1 className="text-xl font-serif mb-2">Title: {post.title}</h1>
          <p className="text-gray-700">Id: {post.id}</p>
          <p className="text-gray-700">Body: {post.body}</p>
          <p className="text-gray-700">UserId: {post.userId}</p>
          <div className="separator h-px bg-gray-300 my-4"></div>
        </div>
      ))}
    </div>
  );
}
