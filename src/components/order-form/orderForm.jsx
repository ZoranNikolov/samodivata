import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function OrderForm() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_vekndll",
				"template_dlli2v8",
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
					placeholder="Вашите имена..."
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user_phone"></label>
				<input
					type="text"
					id="user_phone"
					name="user_phone"
					placeholder="Вашият телефон..."
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user_delivery"></label>
				<input
					type="text"
					id="user_delivery"
					name="user_delivery"
					placeholder="Адрес за доставка (офис на Еконт/Спиди или личен адрес)..."
				/>
			</div>
			<div className="form-group">
				<label htmlFor="user_personification"></label>
				<input
					type="text"
					id="user_personification"
					name="user_personification"
					placeholder="Послание до..."
				/>
			</div>
			{/* <div className="form-group">
				<label htmlFor="user_email"></label>
				<input
					type="email"
					id="user_email"
					name="user_email"
					placeholder="E-mail за контакт"
				/>
			</div> */}
			<div className="form-group">
				<label htmlFor="message"></label>
				<textarea
					id="message"
					name="message"
					placeholder="Допълнителни данни..."
				/>
			</div>
			<button type="submit">Изпрати</button>
		</form>
	);
}
