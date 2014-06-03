//Defines the showMsg template 
var showMsg = _.template($('.showMsg').text());

//Defines the renderMessage function
	//passing msgdata provided by the getJSON through the renderMessage function
function renderMessage (msgdata){
	//forEaching over the msgdata
	msgdata.forEach(function(msg) {
		//ternary ensures that the renderMessage function will still run even if posts the API do not include a time value
			// if the time property has a value, time is set to that value; otherwise, set time is set to a value of 0
		msg.time = msg.time || 0;
		// writes the text into var rendered
		var rendered = showMsg(msg);
    //puts the string into the messages div
    $('.messages').prepend(rendered);
  });

  $('.messages').scrollTop($('.messages').prop('scrollHeight'));
}

// Defines the fetchRender function
	//Fetch data from tiny server and call the renderMessage function
		//once it has all the data, it makes the data available for the renderMessage function
function fetchRender (){
	$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
		//calls the renderMessage function
		renderMessage(data);
	});
}

// Calls the fetchRender function
fetchRender();

// Message Constructor
function Message (user, message, time, appID) {
	this.user = user;
	this.message = message;
	this.time = time;
	this.appID = appID;
}

// Defines the postMessage function
function postMessage (wholeMsg){
	//posts the new Message instance to the API
	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', wholeMsg);
}

// Send Message Button
$('.send-msg').click(function(){
	var user = $('.enter-username').val();
	var message = $('.type-msg-box').val();
	var time = new Date().getTime();
	var appID = 'quatschchatapp';
	var wholeMsg = new Message (user, message, time, appID);

	//calls the postMessage function with parameter new Message instance
	postMessage(wholeMsg);

	//clears the value of the message box
	$('.type-msg-box').val('');
});

// Every 5 seconds -- Calls for new msg data from the API and renders messages onto the page
$(document).ready(function(){
    setInterval(fetchRender, 5000);
});