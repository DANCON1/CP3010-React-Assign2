import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.post('/hello', (req, res) => {
    console.log(req.body);
    res.send('What?');
});

app.get('/movies', (req, res) => {
    res.json( [
        {
          "id": 1,
          "name": "Nosferatu the Vampyre",
          "releaseDate": "1979-01-01",
          "actors": "Klaus Kinski, Isabelle Adjani, Bruno Ganz",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/9/95/Nosferatu_Phantom_der_Nacht.jpg",
          "rating": 5
        },
        {
          "id": 2,
          "name": "Aguirre: The Wrath of God",
          "releaseDate": "1972-12-29",
          "actors": "Klaus Kinski, Helena Rojo, Del Negro",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/a/a7/AguirreGermanPoster_.jpg",
          "rating": 4.8
        },
        {
          "id": 3,
          "name": "Fitzcarraldo",
          "releaseDate": "1982-06-30",
          "actors": "Klaus Kinski, Claudia Cardinale, José Lewgoy",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/a/ae/Fitzcarraldo.jpg",
          "rating": 5
        },
        {
          "id": 4,
          "name": "The Shining",
          "releaseDate": "1980-05-23",
          "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
          "rating": 5
        },
        {
          "id": 5,
          "name": "Manhunter",
          "releaseDate": "1986-08-15",
          "actors": "William Petersen, Kim Greist, Joan Allen",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/7/77/Manhunter_michael_mann_film_poster.jpg",
          "rating": 4.7
        },
        {
          "id": 6,
          "name": "Bad Lieutenant Port of Call: New Orleans",
          "releaseDate": "2009-09-09",
          "actors": "Nicolas Cage, Eva Mendes, Val Kilmer",
          "posterImage": "https://upload.wikimedia.org/wikipedia/en/9/9f/Bad_lieutenant.jpeg",
          "rating": 4.5
        },
        {
          "id": 7,
          "name": "Jason and the Argonauts",
          "releaseDate": "1963-06-19",
          "actors": "Todd Armstrong, Nancy Kovack, Gary Raymond",
          "posterImage": "https://upload.wikimedia.org/wikipedia/commons/6/62/Jason_and_the_argounauts.jpg",
          "rating": 3.8
        }
      ]
      );
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});