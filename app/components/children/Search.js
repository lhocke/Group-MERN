<div className="row">
    <div className="col-sm-12">
        <br/>
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-table"></i>   Top Articles</h3>
            </div>
            <div className="panel-body" id="well-section">
                {this.props.results.map((search, i) => {
                    console.log(search)
                    var article = `article ${i}`
                    return (
                        <div key={i} className="row">
                            <div className="col-sm-10">
                                <a href={search.web_url}>
                                    <h3>{search.headline.main}</h3>
                                </a>
                                <p>{search.snippet}</p>
                            </div>
                            <div className="col-sm-2">
                                <button type="button" className="btn btn-danger" id="save-article" onClick={() => {this.props.saveArticle(search)}}>Save This</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
</div>