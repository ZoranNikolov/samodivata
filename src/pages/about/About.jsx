import "../../assets/styles/about.css";
import image from "../../assets/images/info-about-me-img.jpg";
import { Helmet } from "react-helmet";

export default function About() {
	return (
		<div className="aboutPost">
			<div className="aboutPostWrapper">
				<img src={image} alt="psychologist" className="aboutPostImg" />
				<h1 className="aboutPostTitle">За Поредицата</h1>
				<Helmet>
					<title>
						За поредицата Самодивата и Караконджулът, автор Диляна
						Николова
					</title>
					<meta
						name="description"
						content="Това е история за скитащи самодиви, страховити караконджули, огнедишащи змейове и техните приключения, видени през очите на човешко същество. Една съвременна версия на старобългарските митове и легенди. Имената на всички герои са свързани с изчезнали вече народи, които са бродели някога по земите ни и са оставили своето наследство не само в природата, но и в сърцата ни."
					/>
				</Helmet>
				<div className="aboutPostDesc">
					<p>
						Това е история за скитащи самодиви, страховити
						караконджули, огнедишащи змейове и техните приключения,
						видени през очите на човешко същество.
					</p>
					<p>
						Една съвременна версия на старобългарските митове и
						легенди.
					</p>
					<p>
						Имената на всички герои са свързани с изчезнали вече
						народи, които са бродели някога по земите ни и са
						оставили своето наследство не само в природата, но и в
						сърцата ни.
					</p>
				</div>
			</div>
			{/* <div className="contact-form-container">
				<h3>Изпратете запитване</h3>
				<ContactForm />
			</div> */}
		</div>
	);
}
