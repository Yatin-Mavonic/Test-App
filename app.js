const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');

const userRoutes = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use('/', userRoutes);

app.use((req,res) => {
    res.status(400).json({error: "URL Not Found!!!"})
})

const PORT = 3005;
app.listen(PORT, () => console.log(`Server Started on PORT: ${PORT}`))