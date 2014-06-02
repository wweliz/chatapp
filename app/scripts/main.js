// Display All Messages

var showMsg = _.template($('.showMsg').text());

// passing msgdata provided by the getJSON through the function
function renderMessage (msgdata){
	//forEaching over the msgdata
	msgdata.forEach(function(msg) {
		// writes the text into var rendered
		var rendered = showMsg(msg);
    //puts the string into the messages div
    $('.messages').prepend(rendered);
  });
}

//fetches the info from tiny server; 
	//once it has all the data, it makes the data available for the renderMessage function
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
  renderMessage(data);
});

// Message data should be sent to the server in the following format:
// {
// 	user:"", 
// 	message:"", 
// 	time: epoch, 
// 	meta:"", 
// 	appID: static tag for identification
// }

// Message Constructor
function Message (user, message) {
	this.user = user;
	this.message = message;
	this.time = time;
}

// Send Message Button
	var user = $('.enter-username').val();
	var message = $('.type-msg-box').val();
	var time = new Date().getTime();

	var wholeMsg = new Message (user, message, time);

	//console.log(wholeMsg);

$('.send-msg').click(function(){
	$.post('http://tiny-pizza-server.herokuapp.com/collections/chat-messages', wholeMsg);
});