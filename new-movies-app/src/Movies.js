import React from "react";
import Container from 'react-bootstrap/Container';

const Movies = (props) => {
    let movies = props.movies;
      
      
    if (movies == null) {
        return <h1>Loading...</h1>;
    }

    return (    
        <Container fluid='sm'>
        <h1>Movies!</h1>
        <table bordered="true">
            <tbody>
            <tr>
                <th>Movies</th>
                <th>Release Date</th>
                <th>Actors</th>
                <th>Poster</th>
                <th>Rating</th>
                <th></th>
            </tr>
            {movies.map((m, i) => (
                <tr key={m.id}>
                <td key="1">{m.name}</td>
                <td key="2">{m.releaseDate}</td>
                <td key="3">{m.actors}</td>
                <td key="4">
                    <img src={m.posterImage} width="100px" alt={m.title} />
                </td>
                <td key="5">{m.rating}/5</td>
                <td key="6">
                    <form method='post' action="/api/delete">
                    <input name='data' hidden type='text' value={[m.name,m.releaseDate,m.actors]}/>
                    <input type='submit' value='Del'/>
                    </form>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </Container>
    );
}

export default Movies;
