import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { upcomingNews } from "../newsData"; // Import event data
import { Helmet } from "react-helmet";
import "../../../../src/assets/styles/posts.css";

const SingleNews = () => {
	const { newsId } = useParams();
	const [news, setNews] = useState(null);

	useEffect(() => {
		// Find the event in either upcomingEvents or pastEvents array
		const foundNews = upcomingNews.find((news) => news.id === newsId);
		// If the event is found, set it in the state
		if (foundNews) {
			setNews(foundNews);
		}
	}, [newsId]);

	if (!news) {
		return <div>Loading...</div>;
	}

	// Split the event description into an array of lines
	const descriptionLines = news.newsDescription.split("|");

	return (
		<div className="singlePost events">
			<div className="singlePostWrapper singleEventWrapper">
				<h1 className="singlePostTitle">{news.newsName}</h1>
				<Helmet>
					<title>{news.newsName}</title>
					<meta name="description" content={news.newsDescription} />
				</Helmet>
				<div className="singleEventCard">
					<img src={news.specialNewsImage1} alt={news.newsName} />
					<img src={news.specialNewsImage2} alt={news.newsName} />
				</div>
				{descriptionLines.map((line, index) => (
					<p className="singlePostDesc pb-5" key={index}>
						{line}
					</p>
				))}
			</div>
		</div>
	);
};

export default SingleNews;
