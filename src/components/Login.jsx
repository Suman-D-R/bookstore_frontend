import "../sass/Login.scss";
import logo from "../assets/bookstore-logo.png";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { login, register } from "../utils/user";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginSignUp, setShowLoginSignUp] = useState(true);

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const handleFirstName = (e) => {
    setData({ ...data, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setData({ ...data, lastName: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setData({ ...data, confirmPassword: e.target.value });
  };

  const handleChangeForm = () => {
    setShowLoginSignUp(!showLoginSignUp);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmitLogin = async () => {
    await login(data).then((response) => {
      const data = response.data.data;
      localStorage.setItem("accessTokenBookstore", data);
      navigate("/home");
    });
  };

  const handleSubmitRegister = () => {
    register(data);
  };

  return (
    <div className="login-container">
      <div className="login-content-box">
        <div className="login-box-1">
          <img src={logo}></img>
          <h3>ONLINE BOOK SHOPPING</h3>
        </div>
        <div className="login-box-2">
          <div className="login-page">
            <div
              onClick={handleChangeForm}
              style={{ color: showLoginSignUp ? "#0A0102" : "#878787" }}
            >
              LOGIN
            </div>
            <div
              onClick={handleChangeForm}
              style={{ color: showLoginSignUp ? "#878787" : "#0A0102" }}
            >
              SIGNUP
            </div>
          </div>
          {showLoginSignUp ? (
            <div className="login-form">
              <div>
                <p>Email Id</p>
                <TextField
                  onChange={handleEmail}
                  sx={{ width: "100%" }}
                  size="small"
                />
              </div>
              <div>
                <p>Password</p>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    onChange={handlePassword}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </div>
              <Button
                onClick={handleSubmitLogin}
                variant="contained"
                sx={{ backgroundColor: "#A03037" }}
              >
                Login
              </Button>
              <Divider>OR</Divider>
              <div className="button-container">
                <Button variant="contained">Facebook</Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#0A0102",
                    "&:hover": {
                      backgroundColor: "#F5F5F0",
                      color: "black",
                    },
                  }}
                >
                  Google
                </Button>
              </div>
            </div>
          ) : (
            <div className="signup-form">
              <div className="name-container">
                <div className="firstname-container">
                  <p>First Name</p>
                  <TextField
                    onChange={handleFirstName}
                    sx={{ width: "100%" }}
                    size="small"
                  />
                </div>
                <div className="lastname-container">
                  <p>Last Name</p>
                  <TextField
                    onChange={handleLastName}
                    sx={{ width: "100%" }}
                    size="small"
                  />
                </div>
              </div>
              <div>
                <p>Email Id</p>
                <TextField
                  onChange={handleEmail}
                  sx={{ width: "100%" }}
                  size="small"
                />
              </div>
              <div>
                <p>Password</p>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    onChange={handlePassword}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </FormControl>
              </div>
              <div>
                <p>ConfirmPassword</p>
                <TextField
                  onChange={handleConfirmPassword}
                  sx={{ width: "100%", color: "#FF001C" }}
                  size="small"
                />
              </div>
              <Button
                onClick={handleSubmitRegister}
                variant="contained"
                sx={{ backgroundColor: "#A03037" }}
              >
                Signup
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
