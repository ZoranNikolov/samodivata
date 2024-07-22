import React from "react";
import ReviewList from "./ReviewList";
import image1 from "../../assets/images/reviews-images/review-image1.jpg";
import image2 from "../../assets/images/reviews-images/review-image2.jpg";
import "./reviews.css";

const Reviews = () => {
	const reviews = [
		{
			authorImage: image1,
			author: "Калин Кулин",
			comment: (
				<>
					“Срещата ми със Станислава беше в един изключително ключов момент в
					моя живот. Бях изправен пред сериозно решение за промяна в кариерен
					план и в личен. За първи път в живота си усетих необходимостта и
					ползата от това да имам личен коуч. Благодаря за насоките,
					професионализма и енергията.”
				</>
			),
			rating: 5,
			occupation: "CEO",
		},
		{
			authorImage: image2,
			author: "Латинка Димитрова",
			comment: (
				<>
					“Станислава се появи в живота ми малко преди диагнозата burnout да ме
					връхлети изцяло. Помогна ми да намеря сили в себе си, да се справя със
					съпротивите, които изпитвах от промяната и да пренаредя приоритетите
					си. Изключително съм благодарна. Към днешна дата съм много по-
					ефективна и присъствена, както в личния си живот, така и в
					професионалния.”
				</>
			),
			rating: 5,
			occupation: "HR Expert",
		},
		// Add more reviews as needed
	];

	return (
		<div className="review-section">
			<ReviewList reviews={reviews} />
			<div className="message">
				<h2>Клиентите за мен</h2>
				<p>
					Имам удоволствието да съм личен коуч на успешни мъже и жени от сферата
					на бизнеса, на стартиращи млади и вдъхновяващи хора, както и на
					творци.
				</p>
				<p>Ето някои от тях:</p>
			</div>
		</div>
	);
};

export default Reviews;
