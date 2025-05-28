const app = require('express')();

//example of a get method
app.get('/', (req, res) => {
    res.send('First API');
});


//example of a post method
app.post('/', (req, res) => {
    const { name } = req.body.name;
    res.send(`Hello ${name}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
