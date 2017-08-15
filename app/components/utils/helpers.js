// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
// NYT API, fill in credentials here
var timesKey = "049b820e0acb40e58c6ecbd316c73ea6";
var queryBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key= " + nytAPI + "&q=";

var helper = {
  // This function serves our purpose of running the query to geolocate.
  runQuery: function(seachTerm, numResults, startYear, endYear) {
      var queryURL = queryBase + search;
      if (start !== 0) {
        queryURL+= "&begin_date=" + start + "0101"
      }

      if (end !== 0) {
        queryURL += "&end_date" + end + "1231"
      }
      console.log(queryURL);
      return axios.get(queryURL).then(function(response) {
        var docs = response.data.response.docs;
        var data = [];

        if (docs != null) {
          for (var i = 0; i < num; i++) {
            data.push(docs[i])
          }
          return data
        }
      })
    },

    savePost: function(data) {
      console.log(data.headline.main)
      console.log(data.web_url)
      return axios.post("/api/saved")
    }

    getSaved: function() {
      return axios.get("/api/saved")
    },

    removeSaved: function(data) {
      return axios.delete("/api/saved/:id")
    }
  }

module.exports = helper

  //   // Figure out the geolocation
  //   var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key= " + nytAPI + "&q=";
  //   return axios.get(queryURL).then(function(response) {
  //     // If get get a result, return that result's formatted address property
  //     if (response.data.results[0]) {
  //       return response.data.results[0].formatted;
  //     }
  //     // If we don't get any results, return an empty string
  //     return "";
  //   });
  // },

//   // This function hits our own server to retrieve the record of query results
//   getHistory: function() {
//     return axios.get("/api");
//   },
//
//   // This function posts new searches to our database.
//   postHistory: function(location) {
//     return axios.post("/api", { location: location });
//   }
// };

// We export the API helper
//module.exports = helper;
