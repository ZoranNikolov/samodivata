import React from "react";
import "../../../src/assets/styles/posts.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { 
	// upcomingEvents, 
	upcomingNews
 } from "./newsData";

export default function News() {
	return (
		<div className="singlePost events">
			<div className="singlePostWrapper">
				<h1 className="singlePostTitle">Новини</h1>
				<Helmet>
					<title>Новини</title>
					<meta
						name="description"
						content="Новини свързани с Читалище Светлина - с. Голямо Враново"
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
				<div className="eventsGrid">
					{upcomingNews.map((news) => (
						<Link to={`/news/${news.id}`} key={news.id}>
							<div className="eventCard">
								<img src={news.newsImage} alt={news.newsName} />
								<h3 className="pb-10">{news.newsName}</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
