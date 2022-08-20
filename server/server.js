//initialize port
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// is port listening?
app.listen(port, () => console.log(`Listening on port ${port}`));


create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
}); 