// Message Row Template ////////////////////////////////////////////////////

var showMsg = _.template($('.showMsg').text());

// passing msgdata provided by the getJSON through the function
function renderMessage (msgdata){
	//forEaching over the msgdata
	msgdata.forEach(function(msg) {
		// writes the text into var rendered
		var rendered = showMsg(msg);
    //puts the string into the repo-tab-content div
    $('.messages').prepend(rendered);
  });
}

//fetches the info from my github repo page, once it has all the data, it makes the data available for the renderRepos function
$.getJSON('http://tiny-pizza-server.herokuapp.com/collections/chat-messages').done(function(data){
  renderMessage(data);
});