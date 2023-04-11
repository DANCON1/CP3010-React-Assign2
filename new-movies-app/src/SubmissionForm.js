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

    return (
        <Container fluid='sm'>
        <form method="post" action="/submission" enctype="multipart/form-data" id="form_display">
            <br></br>
            <Row><Col>
            <h1>Submission Form!</h1>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                name="title"
                ref={txtMovieName}
                type="text"
                placeholder="Enter Movie Title">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                name="releaseDate"
                ref={txtMovieRelease}
                type="text"
                placeholder="Enter Release Date">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                name="actors"
                ref={txtMovieActors}
                type="text"
                placeholder="Enter Actors">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input
                name="movie_poster"
                ref={txtMoviePoster}
                type="file"
                accept="image/png, image/jpeg">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <label>Assign rating!&nbsp;&nbsp;&nbsp;</label>
            <input
                name="rating"
                ref={intMovieRating}
                type="number" step="0.1" min="0" max="5">  
            </input>
            </Col></Row>
            <br></br>
            <Row><Col>
            <input type="submit" value="Submit" />
            </Col></Row>
        </form>
        </Container>
    );
}

export default SubmissionForm;
