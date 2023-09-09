const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});