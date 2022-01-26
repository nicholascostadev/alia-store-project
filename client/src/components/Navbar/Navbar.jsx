import './Navbar.css';
import brand from '../../images/Brand.png';

const Navbar = () => {
	let lastScrollTop = 0;

	window.addEventListener('scroll', function () {
		let scrollTop = window.scrollY || document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			this.document.querySelector('.navbar').classList.add('hide');
		} else {
			this.document.querySelector('.navbar').classList.remove('hide');
		}
		lastScrollTop = scrollTop;
	});

	return (
		<nav className="navbar">
			<div>
				<a href="#">
					<img className="brand-img" src={brand} alt="brand" />
				</a>

				<ul className="nav-items">
					<li>
						<a className="nav-item" href="#about">
							About Us
						</a>
					</li>

					<li>
						<a className="nav-item" href="#contact">
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
