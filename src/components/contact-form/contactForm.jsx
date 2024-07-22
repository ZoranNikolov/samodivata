import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_vekndll",
				"template_88zwbad",
				form.current,
				"onfY97bCnVc7VRfyf"
			)
			.then(
				(result) => {
					console.log(result.text);
					resetForm();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const resetForm = () => {
		form.current.reset();
	};

	return (
		<form ref={form} onSubmit={sendEmail} className="contact-form">
			<div className="form-group">
				<label htmlFor="user_name"></label>
				<input
					type="text"
					id="user_name"
					name="user_name"
					placeholder="Вашето име"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user_email"></label>
				<input
					type="email"
					id="user_email"
					name="user_email"
					placeholder="E-mail за контакт"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="message"></label>
				<textarea
					id="message"
					name="message"
					placeholder="Вашето съобщение..."
				/>
			</div>
			<button type="submit">Изпрати</button>
		</form>
	);
}
