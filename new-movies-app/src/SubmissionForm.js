import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SubmissionForm(props) {
    const txtMovieName = useRef();
    const txtMovieRelease = useRef();
    const txtMovieActors = useRef();
    const txtMoviePoster = useRef();
    const intMovieRating = useRef();

    const submit = (e) => {
        e.preventDefault();
        const movieArray = [];
        props.movies.forEach( movie => {
            movieArray.push(movie);
        })
        
        const name = txtMovieName.current.value;
        const date = txtMovieRelease.current.value;
        const actors = txtMovieActors.current.value;
        const posterImage = txtMoviePoster.current.value;
        const rating = intMovieRating.current.value;

        const id = movieArray.length + 1;
        console.log(movieArray);

        movieArray.push(
                {"id": id,
                "name": name,
                "releaseDate": date,
                "actors": actors,
                "posterImage": posterImage,
                "rating": rating}
        )
        props.setMovies(movieArray);

        txtMovieName.current.value = "";
        txtMovieRelease.current.value = "";
        txtMovieActors.current.value = "";
        txtMoviePoster.current.value = "";
        intMovieRating.current.value = "";
    };

    return (
        <>
          
        <Container fluid='sm'>
        <form onSubmit={submit} id="form_display">
            <br></br>
            <Row><Col>
            <h1>Submission Form!</h1>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                ref={txtMovieName}
                type="text"
                placeholder="Enter Movie Title">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                ref={txtMovieRelease}
                type="text"
                placeholder="Enter Release Date">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                ref={txtMovieActors}
                type="text"
                placeholder="Enter Actors">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                ref={txtMoviePoster}
                type="text"
                placeholder="Enter Poster Image URL">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <label>Assign rating!&nbsp;&nbsp;&nbsp;</label>
            <input
                ref={intMovieRating}
                type="number" step="0.1" min="0" max="5">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <button>Submit!</button>
            </Col></Row>
        </form>
        </Container>
    </>
    );
}

export default SubmissionForm;
