import TextField from '../TextField/TextField';

const NewMovieForm = ({}) => {
	return (
		<form>
			<h4>Add Movie</h4>
			<TextField label="Title" />
			<TextField label="Running Time" />
			<TextField label="Genre" />
			<button type="submit">Add Movie</button>
		</form>
	);
};

export default NewMovieForm;
