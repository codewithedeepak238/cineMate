import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import useFetch from "../hook/useFetch"
import useTitle from "../hook/useTitle"

export const Search = ({apiPath}) => {
  const [searchParam] = useSearchParams()
  const searchTerm = searchParam.get('query')
  const {data:movie} = useFetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=2`)
  useTitle(searchTerm)

  return (
    <main>
      {
       movie && movie.length===0? (<div className="p-5 text-black dark:text-white text-xl dark:bg-gray-800">No search result found for '{searchTerm}'</div>): (<>
          <div className="p-5 text-black dark:text-white text-xl dark:bg-gray-800">Search results for '{searchTerm}'</div>
          <div className="flex flex-wrap justify-center p-5 dark:bg-gray-800">
          {movie && movie.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}
          </div>
        </>)
      }
    </main>
  )
}
