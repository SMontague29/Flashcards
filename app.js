var ClozeCard = require("./ClozeCard.js");

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAzf5Lx8hyWta08_TUD9cPdAsP0CIiFH0o",
    authDomain: "flashcards-9087d.firebaseapp.com",
    databaseURL: "https://flashcards-9087d.firebaseio.com",
    projectId: "flashcards-9087d",
    storageBucket: "flashcards-9087d.appspot.com",
    messagingSenderId: "430830667666"
  };
firebase.initializeApp(config);

var database = firebase.database();

var inquirer = require('inquirer');
