import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Book({ filteredBooks, searchVal }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      })
      .catch((err) => {
        console.log(`Error Found: ${err}`);
      });
  }, []);

  const displayBooks =
    filteredBooks && filteredBooks.length ? filteredBooks : books;
  console.log("Display Books Length:", filteredBooks.length);

  return (
    <div className="flex flex-wrap justify-center gap-10 px-5 py-6 mx-4">
      {filteredBooks.length <= 0 ? (
        <div className="text-center">No books available.</div>
      ) : (
        displayBooks.map((book) => (
          <div
            key={book.id}
            className="font-bold border-2 border-black-900 w-[250px] bg-white p-5 flex flex-col rounded-lg shadow-md"
          >
            <img
              src={book.imageLinks.thumbnail}
              alt="not found"
              className="w-auto h-[250px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
            />
            <div className="text-l font-normal my-4 flex flex-row items-center justify-center">
              <h2>{book.title}</h2>
            </div>
            <div className="flex justify-between text-sm">
              <span className="flex justify-center items-center">
                {book.averageRating ? book.averageRating : "4"}
                <FaStar className="mx-2" />
                <p className="font-normal">Free</p>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Book;
