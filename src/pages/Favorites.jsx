import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites(){
    const {favorites} = useMovieContext()
    if(favorites)
    {
        return <div className="movie-grid">
            {favorites.map((movie) =>(<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    }
    return(
        <div className="favorite-empty">

        </div>
    )
}
export default Favorites;