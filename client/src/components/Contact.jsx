import React from 'react';
import { useState } from 'react';
import './Contact.css';
import { db } from './firebase';

function Contact() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		db.collection('contacts')
			.add({
				email: email,
				message: message,
			})
			.then(() => {
				alert('Message has been submitted');
			})
			.catch(error => {
				alert(error.message);
			});

		setEmail('');
		setMessage('');
	};

	return (
		<div id="contact">
			<h1 className="contact-title">Contact Us</h1>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>Email</label>
				<input
					className="email-input"
					type="email"
					name="email"
					placeholder="email@example.com"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<label>Message</label>
				<textarea
					className="content-textarea"
					name="content"
					id=""
					cols="50"
					rows="15"
					placeholder="Message"
					value={message}
					onChange={e => setMessage(e.target.value)}
				></textarea>
				<button className="contact-send">Send</button>
			</form>
		</div>
	);
}

export default Contact;
