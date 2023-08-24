const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmRmZjEwZDZiOTA1ZWZiNWYzNzJhZTE1YTQ3YmE5OCIsInN1YiI6IjY0MTcwY2MzNmEyMjI3MDBjNmI0MGU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Py4v7AuW_GGdBDaJ6hW13v0gtse2VxKAIAJIqwBcT6I'
    }
  };
  
const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';


    export const fetchMovies = async() => {
        try{
            const response = await fetch(apiUrl, options)
            const data = await response.json();
            return data;
        } catch(error) {
            console.log(error);
        
        }
    }

    