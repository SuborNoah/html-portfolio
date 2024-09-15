// Install Express
// npm install express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(bodyParser.json());

// Define an endpoint
app.post('/api/checkout', (req, res) => {
    const data = req.body; // Access the data sent from the client
    console.log(data); // Log data for debugging

    // Process the data (e.g., save to database, handle payment)
    
    // Send a response back
    res.json({ message: 'Processed successfully!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        officeDetails: document.getElementById('office-details').value,
    };

    fetch('https://your-domain.com/api/checkout', { // Update with your server's URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Show success alert
        alert('Successful! Thank you for your purchase.');
        document.getElementById('checkout-form').reset(); // Reset the form if needed
    })
    .catch(error => {
        // Handle error
        alert('There was a problem with your payment: ' + error.message);
    });
});