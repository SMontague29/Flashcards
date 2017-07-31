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

var questions = [
	{
		type: 'input',
		name: 'text',
		message: 'What is the full text for the Cloze Card?',
		default: function () {
			return 'Add your full text here.';
		}
	},
	{
		type: 'input',
		name: 'cloze',
		message: 'What is the desired missing text for the Cloze Card?',
		default: function () {
			return 'Add desired missing text here.';
		}
	},
	{
			type: 'confirm',
			name: 'askAgain',
			message: 'Want to add another Cloze Card?',
			default: true
	}
];

function ask() {
	inquirer.prompt(questions).then(function (answers) {
		var newCloze = new ClozeCard(answers.text, answers.cloze);
		var fullText = newCloze.fullText;
		var cloze = newCloze.cloze;
		var partialText = newCloze.partial();

		storeNewCloze(fullText, cloze, partialText);
		if (answers.askAgain) {
			ask();
		} else {
			console.log("Thanks for adding new flashcard(s)!");
		}
	});
}

ask();

function storeNewCloze(fullText, cloze, partialText) {
	database.ref().push({
		fullText: fullText,
		cloze: cloze,
		partialText: partialText
	});
};