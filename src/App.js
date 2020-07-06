import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { advice: "" };

  fetchApi = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(`https://api.adviceslip.com/advice/${id}`);
    const data = JSON.parse(response.data + "}");
    const { advice } = data.slip;
    this.setState({ advice });
  };

  componentDidMount = () => {
    this.fetchApi();
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchApi}>
            <span>GIVE ME AN ADVICE !!!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
