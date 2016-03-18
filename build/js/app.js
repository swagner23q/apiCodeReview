(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "2a717f33fde40da718927b26dd6f4330e51c00f2";

},{}],2:[function(require,module,exports){
//User Interface Logic

var apiKey = require('../.env').apiKey;

$(document).ready(function() {
   $('#buttonSubmit').click(function() {
     var inputtedUser = $("#gitUserName").val();

     $(".results").show();
     $(".results").empty();
     $.get('https://api.github.com/users/' + inputtedUser + '/repos' + '?access_token=' + apiKey).then(function(response){
       for(var i = 0; i < response.length; i++) {
        $(".results").append("<li><span class='key'> Repo Name: </span>" + "<span class='title'>" + response[i].name + "</span><br>" + "<span class='key'>Date Created: </span>" + moment(response[i].created_at).format("LLL") + "<br>" + "<span class='key'>Description: </span>" + response[i].description + "</li><br>");
      }
    });
      $.get('https://api.github.com/users/' + inputtedUser + '?access_token=' + apiKey).then(function(response){
         $(".userProfiles").html("<img src=' " + response.avatar_url + " '>" + "<br><br>Name: " + response.name + "<br><br>Location: " + response.location + "<br><br>Followers: " + response.followers + "<br><br>Total Repositories: " + response.public_repos);

     }).fail(function(error){
       console.log(error.responseJSON.message);
   });
  });
});

},{"../.env":1}]},{},[2]);
