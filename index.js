const express = require('express');
const app = express();

app.get('/', (_, res) => res.send('express app inside docker'));
app.listen(3000, () => console.log('express app running'));
