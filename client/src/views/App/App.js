import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "../../components/Header/Header.js"
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Search from "../../components/Search/Search.js"
import Top from "../../components/Top/Top.js"

class App extends Component {

  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className="search__searchBarContainer">
          <SearchBar></SearchBar>
        </div>
        <Switch>
          <Route path="/" exact name="Search" component={Search}></Route>
          <Route exact path="/top/:owner/:repo" name="Top Contributors" component={Top}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    searchTerm:state.searchTerm
  })
}

let reduxHOC =  connect(mapStateToProps,null)(App);

export default withRouter(reduxHOC)
