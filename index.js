const express = require('express');

// init app
const app = express();

//init middleware
app.use(express.json({ extended: false }));

// sanity route
app.get('/', (req, res) => { res.send('API RUNNING!') });

// Define routes
// app.use('/projects', require('./routes/projects'));
// app.use('/resources', require('./routes/resources'));
// app.use('/tasks', require('./routes/tasks'));

// port init & have app listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));