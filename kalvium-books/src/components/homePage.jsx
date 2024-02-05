import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./book";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
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
  };

  const handleSearch = (value) => {
    setSearchVal(value.toLowerCase());
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchVal !== "") {
        fetch("https://reactnd-books-api.udacity.com/search", {
          method: "POST",
          headers: {
            Authorization: "whatever-you-want",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: searchVal, maxResults: 30 }),
        })
          .then((res) => res.json())
          .then((data) => {
            setSearchedBooks(data.books);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, 300)

    return () => clearTimeout(delaySearch);
  }, [searchVal]);

  const filterList = searchVal !== "" ? searchedBooks : books;
  const displayBooks = filterList && filterList.length ? filterList : books;

  return (
    <>
      <nav className="flex flex-row justify-between py-7 mx-10">
        <div>
          <h3 className="text-3xl font-bold text-red-600">Kalvium Books</h3>
        </div>
        <div className="flex flex-row items-center">
          <input
            type="search"
            name="searchBar"
            value={searchVal}
            placeholder="search books"
            className="p-1.5 border-2 border-black-900 text-sm rounded-lg outline-none w-full lg:w-[40vw]"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center space-x-5">
          <Link to="/register">
            <button
              className={`px-9 py-1 bg-white-500 font-medium border-black border-2 text-red-500 border-green-900 w-full lg:w-[15vw] hover:font-bold transition ease-in duration-300`}
            >
              Register
            </button>
          </Link>
        </div>
      </nav>
        <Book filteredBooks={displayBooks} searchVal={searchVal} />
    </>
  );
}

export default HomePage;
