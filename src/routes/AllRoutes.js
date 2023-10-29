import { Routes, Route } from "react-router-dom";
import {MovieDetail, MovieList, PageNotFound, Search} from '../pages'


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList apiPath='movie/now_playing' title='Home'/>} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movie/top" element={<MovieList apiPath='movie/top_rated' title='Top'/>} />
            <Route path="movie/upcoming" element={<MovieList apiPath='movie/upcoming' title='Upcoming'/>} />
            <Route path="movie/popular" element={<MovieList apiPath='movie/popular' title='Popular'/>} />
            <Route path="search/movie" element={<Search />} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </>
  )
}
