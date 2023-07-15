import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import backgroundImage from "../assets/search.jpg";
import "../styles/search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchBarClass, setSearchBarClass] = useState("massive");
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const category = searchTerm.trim();
    if (category) {
      navigate(`/results/${category}`);
    }
  };

  return (
    <div
      className="upload-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container textAlign="center">
        <Header as="h1" className="heading">
          Searching Made Easy!
        </Header>

        <div className={`ui action input ${searchBarClass} focus`}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ui button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Search;
