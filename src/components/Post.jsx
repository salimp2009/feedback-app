// Not used for example purposes

import {
  Navigate,
  useNavigate,
  Routes,
  Route /* , useParams */,
} from "react-router-dom";

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
      <Routes>
        <Route path="/show" element={<h1>Showing off nested routes</h1>} />
      </Routes>
      {/* <h1>Post {params.id}</h1> */}
      {/* <p>Name: {params.name}</p> */}
    </div>
  );
}

export default Post;
