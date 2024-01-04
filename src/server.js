const express = require('express');
const bodyParser = require('body-parser');
const excusesRouter = require('./routes/excuses');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/excuses', excusesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.on('error', (err) => {
    console.error('Express error:', err);
});
