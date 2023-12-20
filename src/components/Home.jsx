import { useEffect, useState } from "react";
import { bookOperations } from "../utils/books";
import BookCard from "./BookCard";
import "../sass/Home.scss";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState();
  const [sortBy, setSortBy] = useState("");

  const navigation = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await bookOperations();
        const bookData = data.data;
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const totalBooks = books ? books.length : 0;
  const handleChange = (event) => {
    const value = event.target.value;
    let data = [...books];

    if (value === "low") {
      data.sort((a, b) => a.discountPrice - b.discountPrice);
    }
    if (value === "high") {
      data.sort((a, b) => b.discountPrice - a.discountPrice);
    }

    setBooks(data);
    setSortBy(value);
  };

  const handleView = () => {
    console.log("hello");
    navigation("/cart");
  };

  return (
    <>
      <div className="home-container">
        <div className="home-container-1">
          <div className="container-1-content-1">Books ({totalBooks})</div>
          <div className="container-1-content-2">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Sort By</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sortBy}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="low">Low to High</MenuItem>
                <MenuItem value="high">High to Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="home-container-2">
          <div className="home-card-container">
            {books ? (
              books.map((val) => (
                <BookCard onClick={handleView} key={val._id} booksData={val} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
