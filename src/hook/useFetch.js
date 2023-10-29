import { useEffect, useState } from "react";

export default function useFetch(apiPath){
    const [data, setData] = useState([])
    
    useEffect(()=>{
        async function fetchData(){
          const response = await fetch(apiPath, {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmU1ZmJhNjYwODhmZGNhYTk4NTg3YzMyZDA1MjA2ZSIsInN1YiI6IjY1MzRiZWQ1YzhhNWFjMDExY2VmZmRlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.${process.env.REACT_APP_API_KEY}`
            }   
          })
          const Json = await response.json();
          setData(Json.results);

        }fetchData()
      },[apiPath])
    return {data}
}