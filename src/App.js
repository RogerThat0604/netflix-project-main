import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import  Navigation  from './components/Navigation';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



//1. 홈페이지, 영화페이지, 영화 상세 페이지
//2. 홈페이지에서 베너를 볼 수 있다.
//3. 3가지 섹션의 영화를 볼 수 있따(pop, top rated upcoming)
//4. 각 영화에 마우스를 올려두면, 제목 장르 점수 인기도 청불여부 알 수 있음
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.

//6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있따.(포스터, 제목, 줄거리, 인기도, 예산, 이익, 러닝타임...)
//7. trailer를 누르면 trailer를 볼 수 있따.
//8. 영화의 리뷰를 볼 수 있다.
//9. 추천 관련된 영화도 볼 수 있음.

//10. 영화 검색을 할 수 있다.
//11. 영화 정렬할 수 있다.
//12. 영화를 필터링 할 수 있따.
function App() {
  return (
    <div>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='movies/:id' element={<MovieDetail/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
