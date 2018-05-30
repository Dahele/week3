(function function_name (argument) {
	"use strict";
	console.log("file connected");
	//single line comment
	/*
	multi line
	comment
	 */
	
	var words = "This is a staring of letters";
	var num = 1;
	console.log(words);
	console.log("number of times of visited "+num);
	var teams = ["knights","caps","leafs"];
	console.log(teams[1]); //1st position of an array is 0
	function i_am_a_function (argument) {
		console.log("Form i_am_a_function()");
	}
window.addEventListener("load",i_am_a_function, false);


})();