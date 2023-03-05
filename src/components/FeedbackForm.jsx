import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <Card reverse={true}>
      <form>
        <h2>Please send your comments and ratings </h2>
        {/* @todo rating select component  */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review please!"
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
