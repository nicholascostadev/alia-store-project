import { Link } from 'react-router-dom';
import './Thankyou.css';

function Thankyou() {
	return (
		<div className="thankYou">
			<h1>Your message has been submitted</h1>
			<hr />
			<p>
				if you want to get back to the home page,{' '}
				<Link className="linkToHomePage" to="/"> click here.</Link>
			</p>
		</div>
	);
}

export default Thankyou;
