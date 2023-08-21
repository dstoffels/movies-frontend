import './App.css';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import MovieInfo from './components/MovieInfo/MovieInfo';

function App() {
	return (
		<div className="App">
			<Header />
			<MovieList />
			<MovieInfo title="Princess Bride" runningTime={142} genre="Romantic Comedy" />
		</div>
	);
}

export default App;
