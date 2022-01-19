import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

export const ImageCard = () => {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=NqbQ1Xsle1CiFcwfX5k7hMU7hGTsMJX3C5ZoaOQu";
  const [imageInfo, setImageInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) => {
      setImageInfo(response.data);
      setLoading(true);
    });
  }, [url]);
  if (imageInfo) {
    return (
      <Card style={{ width: "80rem" }}>
        <Card.Img variant="top" src={imageInfo.url} />
        <Card.Body>
          <Card.Title>{imageInfo.date}</Card.Title>
          <Card.Title>Copyright: {imageInfo.copyright}</Card.Title>
          <Card.Text>{imageInfo.explanation}</Card.Text>
          <Button variant="primary">Like</Button>
        </Card.Body>
      </Card>
    );
  } else
    return <div>{<Spinner animation="border" />}</div>;
};
