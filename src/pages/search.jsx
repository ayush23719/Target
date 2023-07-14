import React, { useState, useEffect } from "react";
import { Container, Header } from "semantic-ui-react";
import backgroundImage from "../assets/search.jpg";
import "../styles/upload.css";

const Search = () => {
  const [searchBarClass, setSearchBarClass] = useState("massive");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSearchBarClass("big");
      } else {
        setSearchBarClass("massive");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="upload-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container textAlign="center">
        <Header as="h1" className="heading">
          Searching Made Easy!
        </Header>

        <div className={`ui action input ${searchBarClass} focus`}>
          <input type="text" placeholder="Search..." />
          <button className="ui button">Search</button>
        </div>
      </Container>
    </div>
  );
};

export default Search;
