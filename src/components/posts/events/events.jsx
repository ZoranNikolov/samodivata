import React from "react";
import "../../../assets/styles/posts.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { 
	// upcomingEvents, 
	pastEvents
 } from "./eventsData";

export default function Events() {
	return (
		<div className="singlePost events">
			<div className="singlePostWrapper">
				<h1 className="singlePostTitle">Събития</h1>
				<Helmet>
					<title>Събития</title>
					<meta
						name="description"
						content="Информация за бъдещи и изминали събития."
					/>
				</Helmet>
				{/* <h2 className="pb-10 pt-10">Предстоящи събития</h2>
				<div className="eventsGrid">
					{upcomingEvents.map((event) => (
						<Link to={`/events/${event.id}`} key={event.id}>
							<div className="eventCard">
								<img src={event.eventImage} alt={event.eventName} />
								<h3 className="pb-10">{event.eventName}</h3>
								<p>{event.eventDate}</p>
							</div>
						</Link>
					))}
				</div> */}
				<h2 className="pb-10 pt-10">Минали събития</h2>
				<div className="eventsGrid">
					{pastEvents.map((event) => (
						<Link to={`/events/${event.id}`} key={event.id}>
							<div className="eventCard">
								<img src={event.eventImage} alt={event.eventName} />
								<h3 className="pb-10">{event.eventName}</h3>
								<p>{event.eventDate}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
