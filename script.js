function validateForm() {
    // Get the form elements
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Clear any previous error messages
    errorMessage.innerHTML = '';

    // Validate fields
    if (username === '' || password === '') {
        errorMessage.innerHTML = 'Both fields are required.';
        return false; // Prevent form submission
    }

    // Example of checking a hardcoded username/password (for demonstration)
    if (username !== 'hello' || password !== '123') {
        errorMessage.innerHTML = 'Incorrect username or password.';
        return false;
    }

    // Allow form submission (in a real application, you'd submit the form here)
    if(username=='hello' && password == '123')
        {window.location.href = "project.html"
        return true;
    }
}
