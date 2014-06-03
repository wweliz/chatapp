'use strict';

(function () {

	// Testing the Message Constructor
	describe('Message Constructor', function(){

		var user = 'testuser';
		var message = 'testmessage';
		var time = new Date().getTime();

		function Message (user, message) {
			this.user = user;
			this.message = message;
			this.time = time;
		}

		it('should add a user property to instances', function(){
			var msg = new Message(user, message);
			expect(msg.user).to.eql('testuser');
		});

		it('should add a message property to instances', function(){
			var msg = new Message(user, message);
			expect(msg.message).to.eql('testmessage');
		});

		it('should add a time property to instances', function(){
			var msg = new Message(user, message);
			expect(msg.time).to.exist;
		});

		it('should accept a string as its user argument.', function(){
			var msg = new Message(user, message);
			expect(msg.user).to.equal('testuser');
		});

		it('should accept a string as its message argument.', function(){
			var msg = new Message(user, message);
			expect(msg.message).to.equal('testmessage');
		});

		it('should have a number as its time property.', function(){
			var msg = new Message(user, message);

			expect(msg.time).to.be.a('number');
		});

	});

})();