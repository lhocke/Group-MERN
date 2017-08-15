var React = require("react");
var helpers = require("../utils/helpers");

var Search = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: "", startYear: "", endYear: "", numResults: "5", results: [], saved: ""};
  };

  handleChange: function(event) {
    var target = event.target;
    var value = target.value;
    var name = targer.name
    this.setState({[name]:value});
  }.bind(this);

  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setTerm(
      this.state.searchTerm,
      this.state.numResults,
      this.state.startYear.
      this.state.endYear
    );
    this.setState({
      searchTerm: "",
      numResults: "5",
      startYear: "",
      endYear: "",
      saved: ""
    })
  }.bind(this);

  // empty this section before populating later
  handleReset: function() {
    $("#well-section").empty;
  }

  render: function() {}
