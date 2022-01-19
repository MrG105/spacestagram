import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import axios from "axios";
import Like from "../LikeButton";

export const ImageCard = () => {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=NqbQ1Xsle1CiFcwfX5k7hMU7hGTsMJX3C5ZoaOQu";
  const [imageInfo, setImageInfo] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setImageInfo(response.data);
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
          <Like />
        </Card.Body>
      </Card>
    );
  } else
    return <div>{<Spinner animation="border" />}</div>;
};
