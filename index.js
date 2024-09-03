const express  = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Dockerized node js app !');
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});