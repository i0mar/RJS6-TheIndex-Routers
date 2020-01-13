import React from "react";
import {Link} from "react-router-dom";

function BookRow(props) {
  const book = props.book;
  const authors = book.authors.map(author => (
    <Link to={`/authors/${author.id}`} key={author.id}>{author.name}</Link>
  ));
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <Link to={`/books/${book.color}`} >
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </Link>
    </tr>
  );
}

export default BookRow;
