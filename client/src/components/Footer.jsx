import './Footer.css';
import Instagram from '@material-ui/icons/Instagram';

const Footer = () => {
	return (
		<div className="footer">
			<ul>
				<li>
					<p className="copyright">AliaStore</p>
				</li>
				<li>
					<a
						className="instagram-link"
						href="https://www.instagram.com/alia_storee/"
						target="_blank"
						rel="noreferrer"
					>
						<Instagram className="instagram-logo-footer" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
