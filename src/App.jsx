import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import MovieInfo from './components/MovieInfo/MovieInfo';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';

function App() {
	return (
		<div className="App">
			<Header />
			<MovieList />
			<MovieInfo title="Princess Bride" runningTime={142} genre="Romantic Comedy" />
			<NewMovieForm />
		</div>
	);
}

export default App;
