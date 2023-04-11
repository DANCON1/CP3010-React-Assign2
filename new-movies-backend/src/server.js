import express from 'express';
import {MongoClient } from 'mongodb';

const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/movies', async (req, res) => {

    console.log('get!');

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movies');

    const movieData = await db.collection('movie').find({}).toArray();

    res.json(movieData);
})

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.post('/submission', async (req,res) => {
    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

    const db = client.db('movies');

     // Find the last inserted document and get the highest "id" value
     const lastDocument = await db.collection('movie').findOne({}, {sort: {id: -1}});
     const highestId = lastDocument ? lastDocument.id + 1 : 1;

    const insertOperation = await db.collection('movie').insertOne({
        "id":highestId,
        "name":req.body.title,
        "releaseDate":req.body.releaseDate,
        "actors":req.body.actors,
        "posterImage":req.body.poster,
        "rating":req.body.rating
    })
    
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
