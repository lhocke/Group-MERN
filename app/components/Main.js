//Dependencies
var React = require("react");
var Saved = require("./children/saved");
var Search = require("./children/search");

// This calls axios from helper file js
var helpers = require("./utils/helpers");

//
var Main = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: "",
      startYear: "",
      endYear: "",
      results: [],
      numResults: "",
      saved: ""
    };
  };

componentDidMount: function(prevProps, prevState) {
  helpers.getResults().then(function(response) {
    console.log(response);
    if (response !== this.state.searchTerm) {
      console.log("Search results:", response.data);
      this.setState({ searchTerm: response.data });
    }
  }.bind(this));
},
