var React = require('react');
var helpers = require('../utils/helpers');

var Search = React.createClass({
    return: function() {
        <div className="row">
            <div className="col-sm-12">
                <br/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"><i className="fa fa-table"></i>   Top Articles</h3>
                    </div>
                    <div className="panel-body" id="well-section">
                        {this.props.results.map( function(search, i) {
                            return (
                                <div key={i} className="row">
                                    <div className="col-sm-10">
                                        <a href={search.web_url}>
                                            <h3>{search.headline.main}</h3>
                                        </a>
                                        <p>{search.snippet}</p>
                                    </div>
                                    <div className="col-sm-2">
                                        <button type="button" className="btn btn-danger" id="save-article" onClick={this.props.saveArticle(search).bind(this)}>Save This</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
});

module.exports = Search