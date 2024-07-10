import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import InputSearch from "./component/InputSearch.jsx";

function App() {
  // const [count, setCount] = useState(0);
  // const [textData, setTextData] = useState("");
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   getBooks();
  // }, [data]);
  // const getBooks = async () => {
  //   try {
  //     const data = await axios.get("https://anapioficeandfire.com/api/books");
  //     console.log(data.data, "sdsdds");
  //     setData(data?.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // let filData = data.filter((ele) =>
  //   ele.name.toLowerCase().includes(textData.toLowerCase())
  // );
  // const inputChange = (e) => {
  //   setTextData(e.target.value);
  // };

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <InputSearch inputChange={inputChange} />
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Authors</th>
          <th>Publisher</th>
        </tr>
        {filData.length > 0 &&
          filData.map((ele, i) => {
            return (
              <tr key={ele.isbn}>
                <td>{ele.name}</td>
                <td>{ele.authors.join(",")}</td>
                <td>{ele.publisher}</td>
              </tr>
            );
          })}
      </table> */}
    </div>
  );
}

export default App;
