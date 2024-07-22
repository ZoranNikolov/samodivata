import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { crafts } from "../craftsData"; // Import event data
import { Helmet } from "react-helmet";
import "../../../../assets/styles/posts.css";

const SingleCraft = () => {
	const { craftId } = useParams();
	const [craft, setCraft] = useState(null);

	useEffect(() => {
		const foundCraft =
			crafts.find((craft) => craft.id === craftId) ||
			crafts.find((craft) => craft.id === craftId);

		// If the event is found, set it in the state
		if (foundCraft) {
			setCraft(foundCraft);
		}
	}, [craftId]);

	if (!craft) {
		return <div>Loading...</div>;
	}

	// Split the event description into an array of lines
	const descriptionLines = craft.craftDescription.split("|");

	const videoSrc = craft.src;

	return (
		<div className="singlePost crafts">
			<div className="singlePostWrapper singleCraftWrapper">
				<h1 className="singlePostTitle">{craft.craftName}</h1>
				<Helmet>
					<title>{craft.craftName}</title>
					<meta name="description" content={craft.craftDescription} />
				</Helmet>
				<div className="singleCraftCard">
					<img src={craft.craftImage} alt={craft.craftName} />
					{/* <p className="pt-10">Начало: {craft.craftDate}</p> */}
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

export default SingleCraft;
