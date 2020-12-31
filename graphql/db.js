export let movies = [
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8,
  },
  {
    id: 2,
    name: "Steel Rain 2: Summit",
    score: 5,
  },
  {
    id: 3,
    name: "Proximity",
    score: 2,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovie = movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
