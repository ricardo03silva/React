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
        setIsLoading(true);
        setError(null);
        try {
            const resp = await fetch('https://react-78ebb-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
            if (!resp.ok) {
                throw new Error(`Error ${resp.status}`);
            } else {
                const data = await resp.json();

                let loadedMovies = [];

                for (const key in data) {
                    loadedMovies.push({
                        id: key,
                        title: data[key].title,
                        openingText: data[key].openingText,
                        releaseDate: data[key].releaseDate,
                    });
                }
                console.log(loadedMovies);
                setMovies(loadedMovies);
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

    const addMovieHandler = async (movie) => {
        const response = await fetch('https://react-78ebb-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);
    };

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
