var react = require('react');
var Saved = require("./children/Saved");
var Search = require("./children/Search");
var helpers = require("./utils/helper")

var Main = react.createClass({
  getInitialState: function() {
    return {
      searchTerm: "",
      numResults: "5",
      startYear: "",
      endYear: "",
      results: []
    }
  },
  setTerm: function(term, num, start, end) {
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
  },
  handleChange: function(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault(); 
    helpers.runQuery(
    this.state.searchterm,
    this.state.numResults,
    this.state.startYear,
    this.state.endYear).then(function(data) {
      if (data) {
        this.setState(({results:data}))
        }
    }.bind(this))
  },
  handleReset: function() {
    $('#well-section').empty()
  },
  saveArticle: function(article) {
    console.log("clicked")
    helpers.savePost(article).then(console.log("saved"))
  },
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-center"><i className="fa fa-newspaper-o"></i> New York Times Search</h1>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                <br/>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-list-alt"></i>   Search Parameters</h3>
                  </div>
                  <div className="panel-body">
                    <form role="form" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="search">Search Term:</label>
                        <input name="searchTerm" value={this.state.searchTerm} type="text" className="form-control" id="search-term" onChange={this.handleChange} required/>
                      </div>

                      <div className="form-group">
                        <label htmlFor="pwd">Number of Records to Retrieve:</label>
                        <select name="numResults" value={this.state.numResults} className="form-control" id="num-records-select" onChange={this.handleChange} required>
                          <option value="1">1</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="start-year">Start Year (Optional):</label>
                        <input name="startYear" value={this.state.startYear} type="text" className="form-control" id="start-year" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="end-year">End Year (Optional):</label>
                        <input name="endYear" value={this.state.endYear} type="text" className="form-control" id="end-year" onChange={this.handleChange}/>
                      </div>
                      <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                      <button type="button" className="btn btn-default" id="clear-all" onClick={this.handleReset}><i className="fa fa-trash"></i> Clear Results</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Search saveArticle={this.saveArticle} />
        <Saved />
      </div>
    )
  }
})

module.exports = Main;