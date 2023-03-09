import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
