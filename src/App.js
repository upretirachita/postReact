import React, { Component } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import PostDetail from "./components/PostDetail";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import "./App.css";

function generateID() {
  var number = Math.random();
  number.toString(10);
  var postId = number.toString(10).substr(2, 7);
  return postId;
}

class App extends Component {
  state = {
    inputTitle: "",
    inputCategory: "",
    inputContent: "",
    selectOption: "",
    deletedData: "",
    infos: [
      {
        title: "My day in Inegrify",
        category: "work",
        postId: "01A",
        content: "Welcome to world of happiness"
      },
      {
        title: "My talk at React Meetup",
        category: "Speech",
        postId: "05b",
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
      postId: generateID(),
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
  editInfo = () => {};

  deletefirstInfo = postId => {
    const infos = this.state.infos.filter(info => info.postId !== postId);
    console.log(infos);
    this.setState({
      infos,
      flag: true
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
  inputTitle = e => {
    this.setState({
      inputTitle: e.target.value
    });
  };

  render() {
    console.log("test", this.props.history);
    return (
      <Router>
        <div className="App">
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/posts">Post </Link>
            </nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/posts"
                render={props => (
                  <Posts
                    {...props}
                    infos={this.state.infos}
                    deletefirstInfo={this.deletefirstInfo}
                    editInfo={this.editInfo}
                  />
                )}
              />

              <Route
                exact
                path="/posts/newpost"
                render={props => (
                  <NewPost
                    {...props}
                    name="selectOption"
                    getFirstInfo={this.getFirstInfo}
                    editInfo={this.editInfo}
                    selectOption={this.state.selectOption}
                    handleChange={this.handleChange}
                    inputTitle={this.inputTitle}
                    inputContent={this.inputContent}
                    deletefirstInfo={this.deletefirstInfo}
                    infos={this.state.infos}
                  />
                )}
              />
              <Route
                exact
                path="/posts/:postId"
                render={props => (
                  <PostDetail
                    {...props}
                    infos={this.state.infos}
                    deletefirstInfo={this.deletefirstInfo}
                    editInfo={this.editInfo}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
