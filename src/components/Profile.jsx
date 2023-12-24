import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../sass/Profile.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getUser } from "../utils/user";
import { useState,useEffect } from "react";

function Profile() {


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUser(localStorage.getItem("accessTokenBookstore"));
        setUserData(result.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-container">
      <div className="path">
        <span>Home / </span>profile
      </div>
      <div className="profile-content">
        <div className="profile-content-1">
          <div>
            <h1>Presonal Details</h1>
          </div>
          <div>
            <p>Full Name</p>
            <TextField disabled fullWidth id="fullWidth" value={`${userData?.firstName || ''} ${userData?.lastName || ''}`}/>
          </div>
          <div>
            <p>Email Id</p>
            <TextField disabled fullWidth id="fullWidth" value={userData?.email || ''} />
          </div>
          <div>
            <p>Password</p>
            <TextField type="password" disabled fullWidth id="fullWidth" value="suman123"/>
          </div>
          <div>
            <p>Mobile Number</p>
            <TextField disabled fullWidth id="fullWidth" value="7726535418" />
          </div>
        </div>
        <div className="profile-content-2">
          <div className="profile-address">
            <h2>Address Details</h2>
            <Button>Add New Address</Button>
          </div>
          <div className="profile-address-field">
            <h3>1. WORK</h3>
            <div>
              <p>Address</p>
              <TextField fullWidth id="fullWidth" />
            </div>
            <div className="profile-addres-split">
              <div className="split-textfield">
                <p>Address</p>
                <TextField fullWidth id="fullWidth" />
              </div>
              <div className="split-textfield">
                <p>Address</p>
                <TextField fullWidth id="fullWidth" />
              </div>
            </div>
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
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
      </div>
    </div>
  );
}

export default Profile;
