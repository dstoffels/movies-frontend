const MovieList = ({}) => {
	const titles = ['Princess Bride', 'Forrest Gump', 'Iron Man', 'Pulp Fiction'];

	const movieItems = titles.map((title) => <div>{title}</div>);

	return (
		<div>
			<h4>My Movies</h4>
			<div>{movieItems}</div>
		</div>
	);
};

export default MovieList;
