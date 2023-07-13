import React, { useRef } from "react";
import { Container, Form, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/upload.jpg";
import "../styles/upload.css";

const Upload = () => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
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
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container textAlign="center">
        <Header as="h1" className="heading">
          Upload Your Notes
        </Header>
        <div className="upload-box">
          <Form>
            <Form.Field>
              <label
                style={{ textAlign: "left", fontSize: "1em", color: "white" }}
              >
                Title
              </label>
              <input type="text" placeholder="Enter the title" />
            </Form.Field>
            <Form.Field>
              <label
                style={{ textAlign: "left", fontSize: "1em", color: "white" }}
              >
                Category
              </label>
              <input type="text" placeholder="Enter the category" />
            </Form.Field>
            <div className="upload-link-container">
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
              />
              <Link to="#" className="upload-link" onClick={handleBrowseClick}>
                Browse
              </Link>
            </div>
            <Button primary fluid>
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Upload;
