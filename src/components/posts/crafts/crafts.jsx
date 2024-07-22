import React from "react";
import "../../../assets/styles/posts.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { 
	// upcomingEvents, 
	crafts
 } from "./craftsData";

export default function Crafts() {
	return (
		<div className="singlePost events">
			<div className="singlePostWrapper">
				<h1 className="singlePostTitle">Творения</h1>
				<Helmet>
					<title>Творения</title>
					<meta
						name="description"
						content="Информация за книгата Самодивата и Караконджулът, както и за ръчно изработени изделия от нашия страхотен екип."
					/>
				</Helmet>
				<div className="craftsGrid">
					{crafts.map((craft) => (
						<Link to={`/crafts/${craft.id}`} key={craft.id}>
							<div className="craftCard">
								<img src={craft.craftImage} alt={craft.craftName} />
								<h3 className="pb-10">{craft.craftName}</h3>
								<p>{craft.craftsAdditionalInfo}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
