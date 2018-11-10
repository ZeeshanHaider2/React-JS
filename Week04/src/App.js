import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      id: "",
      url: "",
      avatar_url: "",
      followers: "",
      following: "",
      created_at: ""
    };
  }
  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
    this.setState({
      username: user.login,
      id: user.id,
      url: user.url,
      avatar_url: user.avatar_url,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at
    });
  }
  render() {
    let user;
    if (this.state.username) {
      user = (
        <div>
          <img src={this.state.avatar_url} width="150px" height="150px" />
          <p>
            Username:{this.state.username}
            <br />
            Id:{this.state.id}
            <br />
            Url:{this.state.url}
            <br />
            Followers:{this.state.followers}
            <br />
            Following:{this.state.following}
            <br />
            Profile Created:{this.state.created_at}
            <br />
          </p>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Git User Search</h1>
        <input ref="username" type="text" placeholder="search Git user name" />
        <button onClick={e => this.handleSubmit(e)}>search</button>
        <p>
          {this.state.username}
          <br />
          {user}
        </p>
      </div>
    );
  }
}

export default App;
