import "./App.css";
import React, { Component } from "react";

import "./App.css";
import VideoPlayer from "./Component/VideoPlayer";

class App extends Component {
  state = {
    videoURL:
      "https://www.youtube.com/watch?v=2RrhwDKw-j4&ab_channel=J.Cole-Topic",
  };
  extractVideoId = () => {
    const { videoURL } = this.state;
    const params = new URLSearchParams(
      videoURL.substring(videoURL.indexOf("?"))
    );
    return params.get("v");
  };
  updateURL = () => {
    var url = document.getElementById("url_entry").value;
    this.setState({ videoURL: url });
  };
  render() {
    return (
      <div className="App">
        <br/>
        <VideoPlayer videoId={this.extractVideoId()} />
        <div className="URL_input section">
          <label for="url_entry" className="enter_url_label">
            Paste Your URL Here
          </label>
          <input id="url_entry" type="url" className="enter_url_input" />
          <button
            className="go_button"
            onClick={() => {
              this.updateURL();
            }}
          >
            Go
          </button>
        </div>
      </div>
    );
  }
}
export default App;
