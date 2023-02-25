function App() {
  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment1" },
    { id: 2, text: "Comment2" },
    { id: 3, text: "Comment3" },
    { id: 4, text: "Comment4" },
  ];

  const loading = false;

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      {/* <h1>Feedback App component</h1> */}
      <p>{body}</p>
      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
