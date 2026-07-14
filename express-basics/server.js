const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// setup static folder

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

let posts = [
    {id: 1, title: 'Seoul itinerary' },
    {id: 2, title: 'Cafes in Seongsu' }

];
// get all posts 
app.get('/api/posts', (req, res) => {
    res.json(posts);
});
// get single post
app.get('/api/posts/:id', (req, res) => {
    console.log(req.params.id);
    const id = parseInt(req.params.id);

    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));