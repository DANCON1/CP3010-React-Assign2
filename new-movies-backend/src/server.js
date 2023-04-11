import express from 'express';
import fs from 'fs';

const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

const movieData = JSON.parse(fs.readFileSync('./movies.json'));
//console.log(movieData);

app.get('/movies', (req, res) => {
    res.json(movieData);
});

app.post('/submission', (req,res) => {
    movieData.push( {
        "id":movieData.length+1,
        "name":req.body.title,
        "releaseDate":req.body.releaseDate,
        "actors":req.body.actors,
        "posterImage":req.body.poster,
        "rating":req.body.rating
    })
    saveData();
    console.log(req.body);
    res.redirect('/');
});

const saveData = () => {
    const jsonContent = JSON.stringify(movieData);
    fs.writeFile("./movies.json", jsonContent, 'utf8', function (err) {
        if (err){
            console.log("An error occured trying to write JSON object to file.");
        }
        console.log("JSON file saved");
    });
}

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
