import React, { Component } from "react";
import Home from "./components/Home";
import Post from "./components/Post";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

function generateID() {
  var number = Math.random();
  number.toString(10);
  var idOutput = number.toString(10).substr(2, 7);
  return idOutput;
}

class App extends Component {
  state = {
    inputTitle: "",
    inputCategory: "",
    inputContent: "",
    selectOption: "",
    infos: [
      {
        title: "My day in Inegrify",
        category: "work",
        idOutput: "01A",
        content: "Welcome to world of happiness"
      },
      {
        title: "My talk at React Meetup",
        category: "Speech",
        idOutput: "05b",
        content: "Welcome to world of happiness"
      }
    ],
    flag: true
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  };
  getFirstInfo = () => {
    let data = {
      title: this.state.inputTitle,
      category: this.state.selectOption,
      idOutput: generateID(),
      content: this.state.inputContent
    };
    this.state.infos.push(data);
    this.setState({
      infos: [...this.state.infos],
      flag: true
    });
    console.log(this.state.infos);
    /*  <!––<Route path="/post"   component={Post} render ={()=>(<Post getFirstInfo = {this.getFirstInfo} /> )} /> 
              ––>*/
  };
  deletefirstInfo = () => {
    let data = {
      title: this.state.inputTitle,
      category: this.state.selectOption,
      idOutput: generateID(),
      content: this.state.inputContent
    };
    this.state.infos.push(data);
    this.setState({
      infos: [...this.state.infos.splice(0, 2)],
      flag: true
    });
  };

  inputTitle = e => {
    this.setState({
      inputTitle: e.target.value
    });
  };
  inputCategory = e => {
    this.setState({
      inputCategory: e.target.value
    });
  };
  inputContent = e => {
    this.setState({
      inputContent: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/post">Post </Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route
              path="/post"
              render={props => (
                <Post {...props} getFirstInfo={this.getFirstInfo} />
              )}
            />
            <div className="input-Post">
              <div className="input-button">
                <button onClick={this.getFirstInfo}>Add Post</button>
                <button>Save Post</button>
                <button onClick={this.deletefirstInfo}> Delete Post</button>
              </div>
              <div className="input-data">
                <select
                  name="selectOption"
                  value={this.state.selectOption}
                  onChange={this.handleChange}
                >
                  <option value="Work">Work</option>
                  <option value="Speech">Speech</option>
                  <option value="Recreation">Recreation</option>
                  <option value="Sport">Sport</option>
                </select>
                Title:
                <input type="text" onChange={this.inputTitle} />
                Category:
                <input value={this.state.selectOption} />
              </div>
              Content:
              <textarea
                rows="10"
                cols="70"
                name="message"
                onChange={this.inputContent}
              />
            </div>
            <div className="users-output">
              {this.state.infos.map((info, i) => {
                return (
                  <div key={"id-" + i}>
                    <span>Title:{info.title}</span>
                    <span> Category:{info.category}</span>
                    <span> ID:{info.idOutput}</span>
                    <p> Content:{info.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
