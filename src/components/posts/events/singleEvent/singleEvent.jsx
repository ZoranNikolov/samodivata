import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { upcomingEvents, pastEvents } from "../eventsData"; // Import event data
import { Helmet } from "react-helmet";
import "../../../../assets/styles/posts.css";

const SingleEvent = () => {
	const { eventId } = useParams();
	const [event, setEvent] = useState(null);

	useEffect(() => {
		// Find the event in either upcomingEvents or pastEvents array
		const foundEvent =
			upcomingEvents.find((event) => event.id === eventId) ||
			pastEvents.find((event) => event.id === eventId);

		// If the event is found, set it in the state
		if (foundEvent) {
			setEvent(foundEvent);
		}
	}, [eventId]);

	if (!event) {
		return <div>Loading...</div>;
	}

	// Split the event description into an array of lines
	const descriptionLines = event.eventDescription.split("|");

	const videoSrc = event.src;

	return (
		<div className="singlePost events">
			<div className="singlePostWrapper singleEventWrapper">
				<h1 className="singlePostTitle">{event.eventName}</h1>
				<Helmet>
					<title>{event.eventName}</title>
					<meta name="description" content={event.eventDescription} />
				</Helmet>
				<div className="singleEventCard">
					<img src={event.eventImage} alt={event.eventName} />
					<p className="pt-10">Начало: {event.eventDate}</p>
				</div>
				{descriptionLines.map((line, index) => (
					<p className="singlePostDesc pb-5" key={index}>
						{line}
					</p>
				))}
			</div>
			{videoSrc && (
				<div className="iframeWrapper">
					<iframe
						width="560"
						height="315"
						src={videoSrc}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
			)}
		</div>
	);
};

export default SingleEvent;
