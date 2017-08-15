//Dependencies
var React = require("react");
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var helpers = require("./utils/helpers");

//Create this list of initial states
var Main = React.createClass({
  getInitialState: function() {
    return {
      searchTerm: "", startYear: "", endYear: "", numResults: "5", results: [], saved: ""};
  };

  setTerm(term, num, start, end) {
          if (start !== "" && end !== "") {
              this.setState({
                  searchTerm: term,
                  numResults: num,
                  startYear: start,
                  endYear: end
              })
          } else if (start === "" && end === "") {
              this.setState({
                  searchTerm: term,
                  numResults: num,
                  startYear: 0,
                  endYear: 0
              })
          } else if (start !== "" && end === "") {
              this.setState({
                  searchTerm: term,
                  numResults: num,
                  startYear: start,
                  endYear: 0
              })
          } else if (start === "" && end !== "") {
              this.setState({
                  searchTerm: term,
                  numResults: num,
                  startYear: 0,
                  endYear: end
              })
          }
      }
  componentDidUpdate(prevProps, prevState) {
    helpers.runQuery(this.state.searchTerm, this.state.numResults, this.state.startYear, this.state.endYear).then(function(data) {
      if(data) {
        this.setState({results:data});
      }
    })
  }

  saveArticle(article) {
    console.log("clicked")
    helpers.savePost(article).then(console.log("save"))
  }

  render: function() {
    return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><i className="fa fa-newspaper-o"></i> New York Times Search</h1>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Search setTerm={this.setTerm} results={this.state.results} saveArticle={this.saveArticle}/>
                    </div>
                </div>
                <div className="row">
                    <Saved />
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
};

module.exports = Main;

// componentDidMount: function(prevProps, prevState) {
//   helpers.getResults().then(function(response) {
//     console.log(response);
//     if (response !== this.state.searchTerm) {
//       console.log("Search results:", response.data);
//       this.setState({ searchTerm: response.data });
//     }
//   }.bind(this));
// },
