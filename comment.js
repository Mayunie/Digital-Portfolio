// Get the form and success message elements
const form = document.getElementById('commentForm');
const successMessage = document.getElementById('successMessage');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting (page reload)

  // Check if all fields are filled (basic validation)
  const fullName = form['full_name'].value;
  const email = form['email'].value;
  const comment = form['comment'].value;

  if (fullName && email && comment) {
    // Show the success message
    successMessage.style.display = 'block';

    // Optionally, reset the form after submission
    form.reset();
    
    // Hide the success message after a few seconds (optional)
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 5000);  // Hide after 5 seconds
  } else {
    alert('Please fill out all fields before submitting!');
  }
});
