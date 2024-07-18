import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	// Conditionally set display property based on screen width

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "none",
				transform: "scale(2)",
				right: -35,
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	// Conditionally set display property based on screen width

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				background: "none",
				transform: "scale(2)",
				left: -35,
			}}
			onClick={onClick}
		/>
	);
}

function ImageSlider({ images, onClose, initialIndex }) {
	const [currentSlide, setCurrentSlide] = useState(initialIndex || 0);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".slider-wrapper")) {
				onClose();
			}
		};

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [images, onClose, setCurrentSlide]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		initialSlide: initialIndex || 0, // Set initial slide to initialIndex or 0
		adaptiveHeight: true,
		afterChange: (current) => setCurrentSlide(current),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="slider-container">
			<div className="slider-wrapper">
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<img src={image} alt={`slide-${index}`} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default ImageSlider;
