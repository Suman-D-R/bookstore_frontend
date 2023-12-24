import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../sass/Cart.scss";
import CartBookCard from "./CartBookCard";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Cart() {
  const cartData = useSelector((store) => store.cart.cartItems);
  const location = [
    { label: "Bengloure" },
    { label: "Mysore" },
    { label: "Mumbai" },
  ];

  return (
    <div className="cart-container">
      <div className="cart-header">
        <Header />
      </div>
      {cartData ? (
        <div className="cart-content">
          <div className="card-content-1">
            <span>Home</span> / My Cart
          </div>
          <div className="cart-content-2">
            <div className="item-content-1">
              <h1>My Cart({cartData.items ? cartData.items.length : 0})</h1>
              <div>
                <Autocomplete
                  size="small"
                  disablePortal
                  id="combo-box-demo"
                  options={location}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField
                      size="small"
                      {...params}
                      placeholder="Location"
                    />
                  )}
                />
              </div>
            </div>
            <div className="item-content-2">
              {cartData.items &&
                cartData.items.map((val, index) => (
                  <CartBookCard key={val.book_id} cartData={val} />
                ))}
            </div>
          </div>
          <div className="cart-content-3">
            <div className="cart-customer-content">
              <h1>Customer Details</h1>
            </div>
            <div className="cart-address-from">
              <div className="cart-textcontent">
                <div className="cart-split-content">
                  <p>Full Name</p>
                  <TextField fullWidth id="fullWidth" />
                </div>
                <div className="cart-split-content">
                  <p>Mobile Number</p>
                  <TextField fullWidth id="fullWidth" />
                </div>
              </div>
              <div>
                <p>Address</p>
                <TextField fullWidth id="fullWidth" />
              </div>
              <div className="cart-textcontent">
                <div className="cart-split-content">
                  <p>City / Town</p>
                  <TextField fullWidth id="fullWidth" />
                </div>
                <div className="cart-split-content">
                  <p>State </p>
                  <TextField fullWidth id="fullWidth" />
                </div>
              </div>
              <div>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Home"
                      control={<Radio />}
                      label="Home"
                    />
                    <FormControlLabel
                      value="Work"
                      control={<Radio />}
                      label="Work"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="cart-content-4">
            <div>
              <h2>Order summery</h2>
              <div>
                <div><img src={cartData.items[1].bookImage} alt="" /></div>
                <div>
                  <div>{cartData.items[1].booName}</div>
                  <p>author</p>
                  <div>
                  <h3>Rs. 500</h3>
                  </div>
                  
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Cart;
