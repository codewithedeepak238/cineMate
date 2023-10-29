import useFetch from "../hook/useFetch"
import useTitle from "../hook/useTitle"
import { Card } from "../components/Card"

export const MovieList = ({apiPath, title}) => {

  const {data:movie} = useFetch(`https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`)
  useTitle(title)

  return (
    <main className="flex flex-wrap justify-center p-5 dark:bg-gray-800">
      {
        movie && movie.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))
      }
    </main>
  )
}
