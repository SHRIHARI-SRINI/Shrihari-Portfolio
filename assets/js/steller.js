/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const confirmationMessage = document.getElementById('confirmation-message');

    // Show confirmation message
    confirmationMessage.style.display = 'block';

    // Hide the form
    form.style.display = 'none';

    // Submit the form
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => {
        if (response.ok) {
            // Form successfully submitted
            console.log('Form successfully submitted');
        } else {
            // Form submission failed
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}