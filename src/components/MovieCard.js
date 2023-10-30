import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {

    const {genreList} = useSelector(state=>state.movie);
    const navigate = useNavigate();
    let id = "";
    //console.log("MovieCard item??", item);
    const handleClick = (item) => {
      let id = item.id
      console.log("id????",id);
      navigate(`/movies/${id}`);
    }

  return (
    <div
      className="cards"
      onClick={()=>handleClick(item)}
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger">
              {genreList.find((item) => item.id == id).name}
            </Badge>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default MovieCard
