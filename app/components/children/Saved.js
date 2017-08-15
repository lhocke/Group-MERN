var React = require("react");
var helpers = require ("../utils/helpers");

var Saved = React.createClass {
          return = {saved: []}
    }
    render: function() {
        return (
        <div className="col-sm-12">
            <br/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><i className="fa fa-table"></i>   Saved Articles</h3>
                </div>
                <div className="panel-body" id="well-section">
                </div>
            </div>
        </div>
        );
    }
}
module.exports = Saved;
