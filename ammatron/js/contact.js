$('#contact-form').submit(function(e)) {
	var name = document.getElementById('inputName'),
	    lastname = document.getElementById('lastName'),
	    email = document.getElementById('Email'),
		email = document.getElementById('Subject'),
		email = document.getElementById('Website'),
		message = document.getElementById('message');
		
		if(!name.value || !email.value || !message.value) {
			alertify.error('Please check your entries')
		}
			else {
				$.ajax({
					url: "https://formspree.io/shanmind.2011@gmail.com",
					method: "POST",
					data: $(this).serialize(),
					dataType: "json"
				});
				e.preventDefault()
				$(this).get(0).reset()
				alertify.success('Message Sent')
			}
})