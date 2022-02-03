import React from 'react';
import './Contact.css';

function Contact() {
	return (
		<div id="contact">
			<h1 className="contact-title">Contact Us</h1>
			<form
				method="POST"
				className="contact-form"
				action="https://formsubmit.co/nicholascostadev@gmail.com"
			>
				<label>Name</label>
				<input
					className="email-input"
					type="name"
					name="name"
					placeholder="Your Name"
					required
				/>
				<label>Email</label>
				<input
					className="email-input"
					type="email"
					name="email"
					placeholder="email@example.com"
					required
				/>
				<label>Message</label>
				<textarea
					className="content-textarea"
					name="message"
					cols="50"
					rows="15"
					placeholder="Message"
					required
				></textarea>
				<input type="hidden" name="_template" value="table" />
				<input
					type="hidden"
					name="_next"
					value="https://alia-store-project.netlify.app/thankyou"
				/>
				<input
					type="hidden"
					name="_autoresponse"
					value="Your email has been sent"
				/>
				<button className="contact-send" type="submit">
					Send
				</button>
			</form>
		</div>
	);
}

export default Contact;
