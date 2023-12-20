import React from "react";
import "../sass/BookCard.scss";

function BookCard({ onClick, booksData }) {
  return (
    <div onClick={onClick} className="container-card">
      <div className="container-card-1">
        <img src={booksData.bookImage}></img>
      </div>
      <div className="container-card-2">
        <h3>{booksData.bookName}</h3>
        <p>by {booksData.author}</p>
        <p>ratings</p>
        <div>
          <h3>Rs. {booksData.discountPrice}</h3>
          <p>Rs. {booksData.price}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
