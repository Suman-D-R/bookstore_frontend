import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../sass/Cart.scss";
import CartBookCard from "./CartBookCard";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setOrders } from "../utils/store/orderSlice";
import { placeOrder } from "../utils/order";

function Cart() {
  const [customerDetails, setCustomerDetails] = useState(false);
  const [address, setAddress] = useState(false);
  const [addressDetails, setAddressDetails] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    type: "Home", 
  });

  const dispatch = useDispatch();

  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const cartData = useSelector((store) => store.cart.cartItems);
  const location = [
    { label: "Bengaluru" },
    { label: "Mysore" },
    { label: "Mumbai" },
  ];

  const handleOrder = () => {
    setCustomerDetails(true);
  };

  const handleAddress = () => {
    setAddress(true);
  };

  const handleCheckOut = () => {
    const  data = {...cartData, address :addressDetails}
    
    dispatch(setOrders(addressDetails));
    placeOrder(data);

    
 
    navigate("/home/ordersuccessful");
  };

  const handleAddressInputChange = (field, value) => {
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ["fullName", "mobileNumber", "address", "city", "state"];

    const isValid = requiredFields.every(
      (field) => addressDetails[field] && addressDetails[field].trim() !== ""
    );

    setIsFormValid(isValid);
  };

  useEffect(() => {
    validateForm();
  }, [addressDetails]);

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
                    <TextField size="small" {...params} placeholder="Location" />
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
            {customerDetails ? (
              <div></div>
            ) : (
              <div className="item-content-3">
                <Button onClick={handleOrder} variant="contained">
                  Place Order
                </Button>
              </div>
            )}
          </div>
          <div className="cart-content-3">
            <div className="cart-customer-content">
              <h1>Customer Details</h1>
            </div>
            {customerDetails && address === false ? (
              <div className="cart-address-form">
                <div className="cart-textcontent">
                  <div className="cart-split-content">
                    <p>Full Name</p>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      onChange={(e) =>
                        handleAddressInputChange("fullName", e.target.value)
                      }
                    />
                  </div>
                  <div className="cart-split-content">
                    <p>Mobile Number</p>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      onChange={(e) =>
                        handleAddressInputChange("mobileNumber", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div>
                  <p>Address</p>
                  <TextField
                    fullWidth
                    id="fullWidth"
                    onChange={(e) =>
                      handleAddressInputChange("address", e.target.value)
                    }
                  />
                </div>
                <div className="cart-textcontent">
                  <div className="cart-split-content">
                    <p>City / Town</p>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      onChange={(e) =>
                        handleAddressInputChange("city", e.target.value)
                      }
                    />
                  </div>
                  <div className="cart-split-content">
                    <p>State </p>
                    <TextField
                      fullWidth
                      id="fullWidth"
                      onChange={(e) =>
                        handleAddressInputChange("state", e.target.value)
                      }
                    />
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
                        label="Home"
                        control={<Radio />}
                        onChange={(e) =>
                          handleAddressInputChange("type", e.target.value)
                        }
                      />
                      <FormControlLabel
                        value="Work"
                        control={<Radio />}
                        label="Work"
                        onChange={(e) =>
                          handleAddressInputChange("type", e.target.value)
                        }
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        onChange={(e) =>
                          handleAddressInputChange("type", e.target.value)
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div>
                  {address ? (
                    <div></div>
                  ) : (
                    <div className="item-content-3">
                      <Button
                        onClick={handleAddress}
                        variant="contained"
                        disabled={!isFormValid}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="cart-content-4">
            <div>
              <h2>Order summary</h2>
              {address ? (
                <div className="order-summery">
                  {cartData.items &&
                    cartData.items.map((val, index) => (
                      <CartBookCard
                        key={val.book_id}
                        cartData={val}
                        summery={true}
                      />
                    ))}
                </div>
              ) : (
                <div></div>
              )}
              <div>
                {address ? (
                  <div className="item-content-3">
                    <Button onClick={handleCheckOut} variant="contained">
                      Check Out
                    </Button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
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
