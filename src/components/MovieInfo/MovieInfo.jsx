const MovieInfo = ({ selectedMovie }) => {
	console.log(selectedMovie);
	return (
		<div>
			<h4>{selectedMovie.title}</h4>
			<div>
				<span>Running Time</span>
				<span>{selectedMovie.runningTime}</span>
			</div>
			<div>
				<span>Genre</span>
				<span>{selectedMovie.genre}</span>
			</div>
		</div>
	);
};

export default MovieInfo;
