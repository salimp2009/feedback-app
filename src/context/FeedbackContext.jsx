import { createContext, useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([
    // {
    //   id: 1,
    //   text: "This is feedback item 1",
    //   rating: 9,
    // },
    // {
    //   id: 2,
    //   text: "This is feedback item 2",
    //   rating: 10,
    // },
    // {
    //   id: 3,
    //   text: "This is feedback item 3",
    //   rating: 8,
    // },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?sort=id&_order=desc`
    );
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    if (feedbackEdit.edit === true) {
      alert("Cannot delete; in Edit Mode!");
    } else if (
      window.confirm("Are you sure you want to delete this feedback?")
    ) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
