import React from "react";
import "../../../assets/styles/posts.css"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ContactForm from "../../contact-form/contactForm";
import { galleryEvents } from "./galleryData";

export default function Gallery() {
	return (
		<div className="singlePost events">
			<div className="singlePostWrapper">
				<h1 className="singlePostTitle text-align-center pb-20">Галерия</h1>
				<Helmet>
					<title>Галерия</title>
					<meta name="description" content="Галерия със стнимки от събития." />
				</Helmet>
				<div className="galleryGrid">
					{galleryEvents.map((event) => (
						<Link to={`/gallery/${event.id}`} key={event.id}>
							<div className="galleryCard">
								<img src={event.eventMainImage} alt={event.eventName} />
								<h3 className="pb-10">{event.eventName}</h3>
							</div>
						</Link>
					))}
				</div>
			<div className="iframeWrapper">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/KacOGRMRivg?si=XsZ6OU266TIhc6Kd"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			</div>
			<div className="contact-form-container">
				<h3>Изпратете запитване</h3>
				<ContactForm />
			</div>
		</div>
	);
}
