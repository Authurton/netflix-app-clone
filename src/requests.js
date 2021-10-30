const API_KEY = "ee3e71540cd79769a832f048440d54ad";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_networks=213`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	
}

export default requests;