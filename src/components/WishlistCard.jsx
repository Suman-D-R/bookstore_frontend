import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../sass/WishlistCard.scss";

function WishlistCard({ bookData }) {
  return (
    <div className="wishlist-card-container">
      <div className="wishlist-card-content-1">
        <img src={bookData.bookImage} alt="bookImage" />
      </div>
      <div className="wishlist-card-content-2">
        <div><h3>{bookData.bookName}</h3><p>by author</p></div>
        <div>Rs. 1500 <span>{bookData.price}</span></div>
      </div>
      <div className="wishlist-card-content-3">
        <DeleteOutlineIcon />
      </div>
    </div>
  );
}

export default WishlistCard;
