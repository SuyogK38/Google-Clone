import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Show from "./Show";
import { key, cx } from "../API";
import axios from "axios";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  function goBack() {
    navigate("/");
  }
  function helloWorld() {
    console.log("Printed by hello world");
  }
  const [state, setState] = useState(
    location.state.state ? location.state.state : " "
  );
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
      );
      if (response) {
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    async function getResult() {
      if (location.state.state) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
          );
          if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getResult();
  }, []);

  return (
    <div className="search__main">
      <div className="search__form">
        <div className="search__form-logo">
          <img
            src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="logo"
            onClick={goBack}
            width="150px"
          />
        </div>
        <div className="search__form-input">
          <form className="search1" onSubmit={searchGoogle}>
            <div className="search__input1">
              <SearchIcon className="search__inputIcon1" />
              <input
                type="text"
                className="home__input1"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
              <MicIcon />
            </div>
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
}

export default Search;
