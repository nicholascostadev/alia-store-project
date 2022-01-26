import './About.css';
import Person from '@material-ui/icons/Person';
import aboutImage from '../../images/About.jpg';

const About = () => {
	return (
		<div id="about">
			<div>
				<Person size={50} />
				<h2 className="about-title">About Us</h2>
				<p className="about-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					vestibulum ipsum dolor, blandit feugiat velit cursus at. Curabitur
					euismod dignissim diam, sit amet sagittis diam porttitor a.
					Suspendisse ac bibendum nisl. Nullam vel mi enim. Aenean malesuada
					eros eu tellus placerat fringilla. Suspendisse sed auctor dolor. Etiam
					ex odio, egestas at pretium sed, blandit non mauris. Donec sed diam
					nec odio tincidunt cursus. Nam ultricies aliquam lacus eu interdum.
				</p>
			</div>
			<div className="about-img-container">
				<img className="about-img" src={aboutImage} alt="about-img" />
			</div>
		</div>
	);
};

export default About;
