const API_KEY = "42f89dfaab8a6f4e7e909f0cba43fa52"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () =>{
    const Response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await Response.json()
    return data.results
}
export const searchMovies =  async(query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results;
}