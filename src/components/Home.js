import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

function Home() {
  const navigate = useNavigate();
  const [state, setState] = useState("");
  const searchGoogle = (e) => {
    navigate("/search", { state: { state } });
  };
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon className="icon1" />
          <AccountCircleIcon className="icon1" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="logo"
        />
        <div className="home__inputContainer">
          <form className="search" onSubmit={searchGoogle}>
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input
                type="text"
                className="home__input"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
              <MicIcon />
            </div>

            <div className="search__buttons">
              <Button type="submit">Google Search</Button>
              <Button>I'm Feeling Lucky</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
