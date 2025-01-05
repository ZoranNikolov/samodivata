import "../../assets/styles/about.css";
import image from "../../assets/images/crafts/craft1.png";
import { Helmet } from "react-helmet";
import OrderForm from "../../components/order-form/orderForm";

export default function Orders() {
	return (
		<div className="aboutPost">
			<div className="aboutPostWrapper">
				<img src={image} alt="psychologist" className="aboutPostImg" />
				<h1 className="aboutPostTitle">За поръчка</h1>
				<Helmet>
					<title>Направете поръчка</title>
					<meta
						name="description"
						content="Поръчайте някой от нашите уникални продукти - Книгата `Самодивата и Караконджулътч`до ръчно изработените ни изделия."
					/>
				</Helmet>
				<div className="aboutPostDesc">
					<p className="bold-text">Вашата поръчка ще бъде обработена и изпратена с много внимание и грижа.</p>
					<p>Доставката може да бъде извършена до офис на Еконт или Спиди или до Ваш адрес. Моля отбележете при попълването на данните.</p>
					<p>Ако желаете да има персонализирано послание, моля да отбележите до кого да бъде насочено то.</p>
					<p>При отбелязване на имейл адрес, ще Ви информирам за всички новости свързани със света на "Самодивата и Караконджулът".</p>
					<p>Желая Ви от сърце да бъдете здрави, четящи и да се отпуснете при потапянето в света на магичните създания от гората!</p>
				</div>
			</div>
			<div className="contact-form-container">
				<h3>Данни при поръчка</h3>
				<OrderForm />
			</div>
		</div>
	);
}
