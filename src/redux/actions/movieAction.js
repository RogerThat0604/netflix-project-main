import api from "../api";

const api_key = "5d1ce16e8809c902076bca9097c24da2";

function getMovies(){

    return async (dispatch)=>{
        try{
            dispatch({type:"GET_MOVIES_REQUEST"})

            const popularMovieApi =  api.get(
                `/movie/popular?api_key=${api_key}&language=en&page=1&region=US`
                );
            
            const topRatedApi =  api.get(`/movie/top_rated?api_key=${api_key}&language=en&page=1&region=US`);
    
            const upComingApi =  api.get(`/movie/upcoming?api_key=${api_key}&language=en&page=1&region=US`);

            const genreApi = api.get(`/genre/movie/list?api_key=${api_key}&language=en-US`);
    
           let [popularMovies,topRatedMovies,upcomingMovies, genreList] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upComingApi,
            genreApi,
            ]);
            console.log("genreList?",genreList);

            dispatch({
                type:"GET_MOVIES_SUCCESS",
                payload:{
                    popularMovies: popularMovies.data, 
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                },

            });
        }catch(error){
            dispatch({type:"GET_MOVIES_FAILURE"});
        }
        
        
    }
}

function getMovieDetail(movie_id){
    return async (dispatch) =>{
        const movieDetailApi = api.get(`/movie/${movie_id}?api_key=${api_key}&language-en`);
        let [movieDetail,] = await Promise.all([movieDetailApi,]);
        console.log("영화 디테일 정보들" ,movieDetail);
        dispatch({type:"GET_MOVIE_DETAIL_REQUEST",
                payload:{
                  selectedMovie: movieDetail.data,
                }})
}
} 

export const movieAction = {
    getMovies,
    getMovieDetail,
};