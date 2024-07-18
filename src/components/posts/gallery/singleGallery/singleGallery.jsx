import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { galleryEvents } from "../../gallery/galleryData";
import { Helmet } from "react-helmet";
import "../../../../assets/styles/posts.css";
import ImageSlider from "./imageSlider"; // Import your ImageSlider component

const SingleGallery = () => {
	const { galleryId } = useParams();
	const [event, setEvent] = useState(null);
	const [showCarousel, setShowCarousel] = useState(false);
	// const [activeImage, setActiveImage] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Define activeSlideIndex state

	useEffect(() => {
		const foundEvent = galleryEvents.find((event) => event.id === galleryId);
		if (foundEvent) {
			setEvent(foundEvent);
		}
	}, [galleryId]);

	const handleImageClick = (image, index) => {
		// setActiveImage(image);
		setShowCarousel(true);
		document.body.classList.add("slider-open");
		setActiveSlideIndex(index); // Set the active slide index
	};

	const closeSlider = () => {
		setShowCarousel(false);
		document.body.classList.remove("slider-open");
	};

	if (!event) {
		return <div>Loading...</div>;
	}

	return (
		<div className="singlePost events">
			<div className="singlePostWrapper singleEventWrapper">
				<h1 className="singlePostTitle">{event.eventName}</h1>
				<Helmet>
					<title>{event.eventName}</title>
					<meta name="description" content={event.eventDescription} />
				</Helmet>
				<div className="imageGallery pt-10">
					{event.eventImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`${index}`}
							onClick={() => handleImageClick(image, index)}
						/>
					))}
				</div>
			</div>
			{showCarousel && (
				<div className="carousel-container">
					<ImageSlider
						images={event.eventImages}
						onClose={closeSlider}
						initialIndex={activeSlideIndex}
					/>
				</div>
			)}
		</div>
	);
};

export default SingleGallery;
