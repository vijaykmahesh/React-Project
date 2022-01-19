import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import {booksList} from './books'        /* this line mentioned booksList should be same name as books.js variableName */
import Book from  './Book'

function BookList() {
  return (
    <section className="bookList">
      {booksList.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}


ReactDOM.render(<BookList />, document.getElementById("root"));
