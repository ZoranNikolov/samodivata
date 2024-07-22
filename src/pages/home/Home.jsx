import "../../assets/styles/home.css";
import backgroundImage from "../../assets/images/header-background.jpg";
// import aboutImg from "../../assets/images/aboutImg.jpg";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import ContactForm from "../../components/contact-form/contactForm";

export default function Header() {
	const [showHeader, setShowHeader] = useState(false); // State to control header content visibility
	useEffect(() => {
		// Show header content after a short delay to give the fade-in effect
		const timer = setTimeout(() => {
			setShowHeader(true);
		}, 500); // Adjust the delay duration as needed

		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			<div className="header-section">
				<img
					className="header-background"
					src={backgroundImage}
					alt="header-background-img"
				/>
				<div
					className={`header-content ${showHeader ? "fadeIn show" : "fadeIn"}`}
				>
					<h2>Самодивата и Караконджулът - поредица и творчество</h2>
				</div>
			</div>
			
			{/* <div className="aboutMe">
				<div className="aboutMeContainer">
					<div className="contentWrapper">
						<h2 className="centered">
							Добре дошли, приятели на българския фолклор!
						</h2>
						<div className="card-container">
							<div className="card">
								<div className="card-body p-5">
									<div className="author-image-container d-flex justify-content-center mb-4">
										<img
											src={leadsImg}
											className="rounded-circle author-img"
											alt="Author"
										/>
									</div>
									<figure className="text-center mb-0">
										<blockquote className="blockquote mb-4">
											<p>
												<>
													“Вярвам, че пътя на промяната в живота ви е промяната
													на вашата енергия. Когато движите енергията през
													сърцето, то трансформира негативните мисли,
													безпокойството, съмнението и страха, в нов начин на
													съществуване.
													Отваряйки сърцето си, създавате верига от движение и
													поток.”
												</>
											</p>
										</blockquote>
										<figcaption className="blockquote-footer mb-0">
											Станислава Митова
										</figcaption>
									</figure>
								</div>
							</div>
						</div>
						<p>
							Основано през 1923 г., читалище „Светлина“ играе жизненоважна роля
							в запазването и насърчаването на богатото културно наследство на
							село Голямо Враново. Като активен участник в местната общност,
							нашето читалище е посветено на популяризирането на българския
							фолклор, опазването на традициите и насърчаването на духовното
							израстване сред нашите членове.
						</p>
						<p>
							Нашата мисия е да вдъхновяваме, образоваме и забавляваме хората от
							всички възрасти чрез различни културни и развлекателни дейности.
							Стремим се да запазим уникалните обичаи и практики на нашия
							регион, като същевременно насърчаваме творчеството и иновациите
							сред нашите членове.
						</p>
						<p>
							Нашето читалище разполага с разнообразна колекция от книги,
							списания и вестници, достъпни за всички членове на общността. Ние
							също така управляваме литературен клуб, където читателите могат да
							обсъждат любимите си книги, да споделят мнения и да участват в
							организирани четения и писателски семинари.
						</p>
						<p>
							Ние вярваме, че е изключително важно да възпитаваме любов към
							културата и традициите у младите умове. Ето защо предлагаме
							разнообразни програми за обучение на деца, включително уроци по
							музика, изкуства и занаяти. Насърчаваме децата да изследват своите
							таланти и страсти, като същевременно научават за богатата история
							и култура на нашия регион.
						</p>
						<Link className="learnMoreButton" to="/about">
							Научете повече
						</Link>
					</div>

					<div className="aboutMeImagesContainer">
						<img src={aboutMeImg1} alt="about-me-img-1" className="aboutMeImg" />
						<img src={aboutImg} alt="about-me-img-2" className="aboutMeImg" />
					</div>
				</div>
			</div> */}
			{/* <div className="contact-form-container">
				<h3>Изпратете запитване</h3>
				<ContactForm />
			</div> */}
		</>
	);
}
