require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (_, res) => res.send(`updated key: ${process.env.KEY}`));
app.listen(process.env.PORT, () => console.log('express app running'));
