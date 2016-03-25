(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5eaa477233003e204021b173ad23eecf039b9592";

},{}],2:[function(require,module,exports){
//Business Logic
var apiKey = require('../.env').apiKey;

exports.getRepos = function() {
    var inputtedUser = $("#gitUserName").val();
  $.get('https://api.github.com/users/' + inputtedUser + '/repos' + '?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
     $(".results").append("<li><span class='key'> Repo Name: </span>" + "<span class='title'>" + response[i].name + "</span><br>" + "<span class='key'>Date Created: </span>" + moment(response[i].created_at).format("LLL") + "<br>" + "<span class='key'>Description: </span>" + response[i].description + "</li><br>");
   }
 });
    $.get('https://api.github.com/users/' + inputtedUser + '?access_token=' + apiKey).then(function(response){
      $(".userProfiles").html("<img src=' " + response.avatar_url + " '>" + "<br><br>Name: " + response.name + "<br><br>Location: " + response.location + "<br><br>Followers: " + response.followers + "<br><br>Total Repositories: " + response.public_repos);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
};

},{"../.env":1}],3:[function(require,module,exports){
//User Interface Logic
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#buttonSubmit').click(function() {
   $(".results").show();
   $(".results").empty();
   getRepos();

  });
});

},{"./../js/github.js":2}]},{},[3]);
