import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Thankyou from './Thankyou/Thankyou';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/thankyou" element={<Thankyou />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
