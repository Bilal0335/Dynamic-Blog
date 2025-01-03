"use client";
import { useEffect, useState } from "react";

const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  useEffect(() => {
    try {
      const localStorageComments = localStorage.getItem("comments");
      if (localStorageComments) {
        const parsedComments = JSON.parse(localStorageComments);
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        } else {
          console.error("Invalid data in localStorage");
        }
      }
    } catch (error) {
      console.error("Error parsing comments from local storage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleDelete = (index: number): void => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Comment Section</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="mt-2 p-2 w-full bg-indigo-500 text-white rounded-md"
        >
          Submit
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">Comments:</h3>
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          comments.map((c, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              <p>{c}</p>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
