import React, { useState } from "react";
import { Container, Header, Card, Modal, Image } from "semantic-ui-react";
import backgroundImage from "../assets/results.jpg";
import notesImage from "../assets/notes.jpg";
import "../styles/results.css";

const Results = () => {
  const [openModal, setOpenModal] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleOpenModal = (image) => {
    setImageToShow(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const notes = [
    {
      title: "DSA",
      image: notesImage,
      date: "Uploaded on Aug 2022",
    },
    {
      title: "Computer Networks",
      image: notesImage,
      date: "Uploaded on Sep 2022",
    },
    {
      title: "Operating Systems",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "DBMS",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "Computer Architecture",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "Discrete Mathematics",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "Web Technologies",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "Software Engineering",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
    {
      title: "Computer Graphics",
      image: notesImage,
      date: "Uploaded on Feb 2023",
    },
  ];

  return (
    <div
      className="results-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container textAlign="center">
        <Header as="h1" className="heading">
          All Uploaded Notes
        </Header>

        <div className="card-grid">
          <Card.Group centered>
            {notes.map((note, index) => (
              <Card
                key={index}
                className={`note-card ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="blurring dimmable image"
                  onClick={() => handleOpenModal(note.image)}
                >
                  {hoveredIndex === index && (
                    <div className="overlay">
                      <div className="overlay-content">
                        <div
                          className="ui primary button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenModal(note.image);
                          }}
                        >
                          View Image
                        </div>
                      </div>
                    </div>
                  )}
                  <img src={note.image} alt={note.title} />
                </div>
                <Card.Content>
                  <Card.Header>{note.title}</Card.Header>
                  <Card.Meta>
                    <span className="date">{note.date}</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
        <Modal open={openModal} onClose={handleCloseModal} closeIcon>
          <Modal.Content image>
            <Image src={imageToShow} alt="Full View" centered />
          </Modal.Content>
        </Modal>
      </Container>
    </div>
  );
};

export default Results;
