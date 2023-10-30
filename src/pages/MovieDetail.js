import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const MovieDetail = () => {
  const {id} = useParams();
  console.log("MovieDetail.js에서ID",id);
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state)=>state.movie);
  console.log("selectedMovieInfo",selectedMovie);
  useEffect(()=>{
    dispatch(movieAction.getMovieDetail(id));
  },[]);

  return (
    <div className=''>
      <Container className="movie-detail-container">
        <Row>
          <Col>
            <div
              className="movie-poster-img"
              style={{
                backgroundImage:
                  "url(" +
                  `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${selectedMovie.selectedMovie.poster_path}` +
                  ")",
               minHeight: 450, backgroundRepeat: 'no-repeat'}}
            ></div>
          </Col>
          <Col>
            <div className="movie-info">
              <div className='movie-title'>{selectedMovie.selectedMovie.original_title}</div>
              <div className='movie-tagline'>"{selectedMovie.selectedMovie.tagline}"</div>
              <div className='movie-overview'>{selectedMovie.selectedMovie.overview}</div>
              <div></div>
              <div></div>
              <div>Revenue: ${selectedMovie.selectedMovie.revenue}</div>
              <div>Released Date: {selectedMovie.selectedMovie.release_date}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieDetail
