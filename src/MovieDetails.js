


const MovieDetails = ( { posterUrl, title, rated, runtime, genre = 'Unknown', rating = 0, plot, actors } ) => {
    return (
        <div className="movie-details">
            <div className="poster">
                <img src={posterUrl} />
            </div>
            <div>
                <div className="header">
                    <p className="title">{title}</p>
                    <p className="rating">{rating ?? 'N/A'}</p>
                </div>
                <ul>
                    <li>{runtime} min</li>
                    <li>{rated}</li>
                    <li>{genre}</li>
                </ul>
                <div className="info-section">
                    <p className="title">Plot</p>
                    <p>{plot}</p>
                </div>
                <div className="info-section">
                    <p className="title">Actors</p>
                    <p>{actors}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails