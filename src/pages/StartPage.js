import React from "react";
import { Header } from "semantic-ui-react";
import ReactPlayer from "react-player";

export default function StartPage() {
  return (
    <div>
      <Header>Question of The Week</Header>

      <ReactPlayer
        style={{ marginLeft: "15%" }}
        url="https://www.youtube.com/watch?v=7PpTssFVUpQ"
        controls={true}
      />
    </div>
  );
}
