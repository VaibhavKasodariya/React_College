    const express = require('express');
    const app = express();
    const PORT = 3000; // You can choose any available port

    // Define a basic route
    app.get('/', (req, res) => {
      res.send('Hello from your Express server!');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });