import './App.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import RecommendedVideos from '../recommendedVideos/RecommendedVideos';
import SearchPage from '../searchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<div className='app__page'>
							<Sidebar />
							<RecommendedVideos />
						</div>
					</Route>
					<Route path='/search/:searchTerm'>
					<div className='app__page'>
							<Sidebar />
							<SearchPage />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
