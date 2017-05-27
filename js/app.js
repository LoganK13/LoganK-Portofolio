$(document).foundation()
$(document).ready(function() {
	$('#contact-submit').submit(function(e) {
		var name = document.getElementByID('first-name', ' last-name')
			email = document.getElementByID('email')
			subject = document.getElementByID("subject")
			message = document.getElementByID('comment');

		if (!name.value || !email.value || !message.value) {
			alertify.error('Please check your entries')
		} else {
			$.ajax({
				url: "http://formspree.io/logankeartland@gmail.com",
				method: "POST",
				data: $(this).serialize(),
				dataType: "json"
			});
			e.preventDefault()
			$(this).get(0).reset()
			alertify.success('Message sent')
		}
	});
});