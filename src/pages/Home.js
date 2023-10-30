import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector((state)=> state.movie);

  //생명주기 다시보기
  useEffect(()=>{
    dispatch(movieAction.getMovies());
  }, []);

  //loading이 true면 loading 스피너를 보여주고
  //loading이 false면 데이터를 보여주고

  //true: 데이터 도착 전
  //false: 데이터 도착 후 , 에러가 났을때
  if(loading){
    return <ClipLoader
    color="#ffff"
    size={150}
  />
  }
  return (
    <div>
      <Banner movie={topRatedMovies.results}></Banner>

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  );
}

export default Home
