// Not used for example purposes

import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();

  return (
    <div className="posts">
      <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p>
    </div>
  );
}

export default Post;
