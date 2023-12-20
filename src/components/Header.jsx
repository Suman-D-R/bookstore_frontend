import "../sass/Header.scss";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header({home=true}) {
  const navigation = useNavigate();

  const hangleCart = () => {
    navigation("cart");
  };

  const handleHome = ()=>{
    navigation("/home")
  }

  return (
    <>
      { home ? (
        <header>
          <div>
            <div onClick={handleHome} className="store-name">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                width="31.039"
                height="23.713"
                viewBox="0 0 31.039 23.713"
              >
                <defs></defs>
                <g transform="translate(0 -35.048)">
                  <g transform="translate(0 35.048)">
                    <g transform="translate(0 0)">
                      <path
                        className="a"
                        d="M35.941,35.049h0a1.1,1.1,0,0,0-.778.322,1.106,1.106,0,0,0-.327.788V52.815a1.114,1.114,0,0,0,1.112,1.11c2.585.006,6.917.545,9.9,3.672V40.167A1.064,1.064,0,0,0,45.7,39.6C43.245,35.655,38.532,35.055,35.941,35.049Z"
                        transform="translate(-31.193 -35.049)"
                      />
                      <path
                        className="a"
                        d="M167.768,52.814V36.159a1.106,1.106,0,0,0-.327-.788,1.1,1.1,0,0,0-.778-.322h0c-2.591.006-7.3.606-9.757,4.556a1.064,1.064,0,0,0-.153.562V57.6c2.988-3.127,7.32-3.666,9.9-3.672A1.114,1.114,0,0,0,167.768,52.814Z"
                        transform="translate(-140.369 -35.048)"
                      />
                      <path
                        className="a"
                        d="M183.489,71.8h-.805V85.726a2.842,2.842,0,0,1-2.832,2.835c-2.193.005-5.809.434-8.369,2.858a26.738,26.738,0,0,1,11.758.227,1.111,1.111,0,0,0,1.359-1.082V72.912A1.112,1.112,0,0,0,183.489,71.8Z"
                        transform="translate(-153.561 -67.96)"
                      />
                      <path
                        className="a"
                        d="M1.916,85.726V71.8H1.111A1.112,1.112,0,0,0,0,72.912V90.563a1.111,1.111,0,0,0,1.359,1.082,26.737,26.737,0,0,1,11.758-.227c-2.561-2.424-6.176-2.852-8.369-2.857A2.842,2.842,0,0,1,1.916,85.726Z"
                        transform="translate(0 -67.96)"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <p>Bookstore</p>
            </div>

            <div className="card-container">
              <Divider orientation="vertical" variant="middle" flexItem />

              <div>
                <PermIdentityIcon style={{ color: "white" }} />
                <p>profile</p>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div>
                <ShoppingCartIcon style={{ color: "white" }} />
                <p>cart</p>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem />
            </div>
          </div>
        </header>
      ) : (
        <header className="header-home">
        <div className="store-name">
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="31.039"
            height="23.713"
            viewBox="0 0 31.039 23.713"
          >
            <defs></defs>
            <g transform="translate(0 -35.048)">
              <g transform="translate(0 35.048)">
                <g transform="translate(0 0)">
                  <path
                    className="a"
                    d="M35.941,35.049h0a1.1,1.1,0,0,0-.778.322,1.106,1.106,0,0,0-.327.788V52.815a1.114,1.114,0,0,0,1.112,1.11c2.585.006,6.917.545,9.9,3.672V40.167A1.064,1.064,0,0,0,45.7,39.6C43.245,35.655,38.532,35.055,35.941,35.049Z"
                    transform="translate(-31.193 -35.049)"
                  />
                  <path
                    className="a"
                    d="M167.768,52.814V36.159a1.106,1.106,0,0,0-.327-.788,1.1,1.1,0,0,0-.778-.322h0c-2.591.006-7.3.606-9.757,4.556a1.064,1.064,0,0,0-.153.562V57.6c2.988-3.127,7.32-3.666,9.9-3.672A1.114,1.114,0,0,0,167.768,52.814Z"
                    transform="translate(-140.369 -35.048)"
                  />
                  <path
                    className="a"
                    d="M183.489,71.8h-.805V85.726a2.842,2.842,0,0,1-2.832,2.835c-2.193.005-5.809.434-8.369,2.858a26.738,26.738,0,0,1,11.758.227,1.111,1.111,0,0,0,1.359-1.082V72.912A1.112,1.112,0,0,0,183.489,71.8Z"
                    transform="translate(-153.561 -67.96)"
                  />
                  <path
                    className="a"
                    d="M1.916,85.726V71.8H1.111A1.112,1.112,0,0,0,0,72.912V90.563a1.111,1.111,0,0,0,1.359,1.082,26.737,26.737,0,0,1,11.758-.227c-2.561-2.424-6.176-2.852-8.369-2.857A2.842,2.842,0,0,1,1.916,85.726Z"
                    transform="translate(0 -67.96)"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p>Bookstore</p>
        </div>
        <div className="searchbar">
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
        <div className="card-container">
          <Divider orientation="vertical" variant="middle" flexItem />
  
          <div>
            <PermIdentityIcon style={{ color: "white" }} />
            <p>profile</p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div onClick={hangleCart}>
            <ShoppingCartIcon style={{ color: "white" }} />
            <p>cart</p>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
        </div>
      </header>
      )}
    </>
  );
}

export default Header;
