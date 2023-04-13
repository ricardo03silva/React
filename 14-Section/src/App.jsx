import { Fragment, useState, useEffect, useCallback } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        console.log('OK');
        setIsLoading(true);
        setError(null);
        try {
            const resp = await fetch('https://swapi.dev/api/films/');
            if (!resp.ok) {
                throw new Error(`Error ${resp.status}`);
            } else {
                const data = await resp.json();
                const transformedResult = data.results.map((el) => {
                    return {
                        id: el.episode_id,
                        title: el.title,
                        releaseDate: el.release_date,
                        openingText: el.opening_crawl,
                    };
                });
                setMovies(transformedResult);
            }
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    function addMovieHandler(movie) {
        console.log(movie);
    }

    let content = 'Found No Movies';
    if (!isLoading && movies.length > 0) {
        content = <MoviesList movies={movies} />;
    } else if (!isLoading && error) {
        content = <p>{error}</p>;
    } else if (isLoading) {
        content = <ClipLoader color="#460897" />;
    }

    return (
        <Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </Fragment>
    );
}

export default App;
