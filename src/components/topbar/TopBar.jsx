import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/topbar.css";
import logo from "../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";

export default function TopBar() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const hamburgerRef = useRef(null);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	const handleClickOutside = (event) => {
		if (
			hamburgerRef.current &&
			!hamburgerRef.current.contains(event.target)
		) {
			setHamburgerOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleLinkClick = (to) => (event) => {
		event.preventDefault();

		if (to === pathname) {
			window.scrollTo(0, 0);
		} else {
			navigate(to);
		}
	};

	return (
		<>
			<div className="top">
				<div className="infoContainer">
					<div className="infoWrapper">
						{/* <i className="contactIcon fa-solid fa-phone">
							<a href="tel:">телефон на читалището</a>
						</i> */}
						<i className="contactIcon fa-solid fa-envelope">
							<a href="mailto:ch_g.vranovo@abv.bg">
								ch_g.vranovo@abv.bg
							</a>
						</i>
					</div>
				</div>
				<div className="topNav">
					<div
						className={`topLeft ${
							scrolled ? "scrolledTopLeft" : ""
						}`}
					>
						<Link
							className="link excludeHover"
							to="/"
							onClick={handleLinkClick("/")}
						>
							<img className="topImg" src={logo} alt="logo" />
						</Link>
						<span className="person">Читалище Светлина</span>
						<span className="profession">с. Голямо Враново</span>
					</div>
					<div className="topCenter">
						<div className="hamburgerMenu">
							<i
								ref={hamburgerRef}
								onClick={toggleHamburger}
								className="fa fa-bars"
								aria-hidden="true"
							></i>
							{hamburgerOpen && (
								<ul className="hamburgerList">
									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/"
											onClick={handleLinkClick("/")}
										>
											НАЧАЛО
										</Link>
									</li>
									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/about"
											onClick={handleLinkClick("/about")}
										>
											ЗА НАС
										</Link>
									</li>

									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/about"
											onClick={handleLinkClick("/events")}
										>
											СЪБИТИЯ
										</Link>
									</li>
									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/gallery"
											onClick={handleLinkClick(
												"/gallery"
											)}
										>
											ГАЛЕРИЯ
										</Link>
									</li>
									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/blog"
											onClick={handleLinkClick("/blog")}
										>
											БЛОГ
										</Link>
									</li>
									<li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/news"
											onClick={handleLinkClick("/news")}
										>
											НОВИНИ
										</Link>
									</li>
								</ul>
							)}
						</div>
						<ul className="topList ">
							<li className="topListItem">
								<Link
									className="link"
									to="/"
									onClick={handleLinkClick("/")}
								>
									<span>НАЧАЛО</span>
								</Link>
							</li>
							<li className="topListItem">
								<Link
									className="link"
									to="/about"
									onClick={handleLinkClick("/about")}
								>
									<span>ЗА НАС</span>
								</Link>
							</li>
							<li className="topListItem">
								<Link
									className="link"
									to="/about"
									onClick={handleLinkClick("/events")}
								>
									<span>СЪБИТИЯ</span>
								</Link>
							</li>
							<li className="topListItem">
								<Link
									className="link"
									to="/gallery"
									onClick={handleLinkClick("/gallery")}
								>
									<span>ГАЛЕРИЯ</span>
								</Link>
							</li>
							<li className="topListItem">
								<Link
									className="link"
									to="/blog"
									onClick={handleLinkClick("/blog")}
								>
									<span>БЛОГ</span>
								</Link>
							</li>
							<li className="topListItem">
								<Link
									className="link"
									to="/news"
									onClick={handleLinkClick("/news")}
								>
									<span>НОВИНИ</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className="topRight">
						<a
							href="https://www.facebook.com/profile.php?id=100057168165857"
							target="_blank"
							rel="noreferrer"
						>
							<i className="topIcon fa-brands fa-square-facebook"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
