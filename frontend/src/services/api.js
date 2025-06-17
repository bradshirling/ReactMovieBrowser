const API_KEY = "e52d1a53caf97a98382d2e107e9b23a8"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
    const data = await response.json()
    return data
}

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}&page=${page}`
    )
    const data = await response.json()
    return data
}