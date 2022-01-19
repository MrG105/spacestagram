import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Like extends Component {
  state = { liked: false };

  toggle = () => {
    let localLiked = this.state.liked;
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  render() {
    return (
      <div className="container">
        <center>
          <div className="container" onClick={() => this.toggle()}>
            {this.state.liked === false ? (
              <Button variant="primary">Like </Button>
            ) : (
              <Button variant="danger">Liked</Button>
            )}
          </div>
        </center>
      </div>
    );
  }
}

export default Like;
