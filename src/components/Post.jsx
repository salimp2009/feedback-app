// Not used for example purposes

import { Navigate, useNavigate /* , useParams */ } from "react-router-dom";

function Post() {
  // const params = useParams();
  const status = 200;

  const navigate = useNavigate();

  if (status === 404) {
    return <Navigate to="/not found" />;
  }

  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <div className="posts">
      <h1>Post</h1>
      <button type="submit" onClick={onClickHandler}>
        Navigate
      </button>
      {/* <h1>Post {params.id}</h1> */}
      {/* <p>Name: {params.name}</p> */}
    </div>
  );
}

export default Post;
