const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params);
});

app.get('/api/posts', (req, res) => {
    res.send(
        [
            {
                year: 2018,
                month: 1
            },
            {
                year: 2018,
                month: 2
            },
        ]
        

    );
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}...`));
