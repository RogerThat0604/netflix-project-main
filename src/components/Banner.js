import React from 'react'

const Banner = ({movie}) => {
    console.log("movie", movie)
  return (
    <div>
      <div
        className='banner'
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie[1].backdrop_path}` +
            ")",
        }}
      >
        <div className='banner-info'>
            <h1>{movie[1].title}</h1>
            <p>{movie[1].overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner
