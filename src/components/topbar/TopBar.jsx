import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/styles/topbar.css";
import logo from "../../assets/images/logo.jpg";
import { useState, useEffect, useRef } from "react";
import Player from "../player/player";

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
				{/* <Player /> */}
				{/* <div className="infoContainer"> */}
					{/* <div className="infoWrapper"> */}
						{/* <i className="contactIcon fa-solid fa-envelope">
							<a href="mailto:samodivataikarakondjulat@gmail.com">
								samodivataikarakondjulat@gmail.com
							</a>
						</i> */}
					{/* </div> */}
				{/* </div> */}
				{/* <div className="topNav"> */}
				<div className={`topNav ${scrolled ? "scrolledTopLeft" : ""}`}>
					<div
						className="topLeft"
					>
						{/* <div
						className={`topLeft ${
							scrolled ? "scrolledTopLeft" : ""
						}`}
					> */}
						<Link
							className="link excludeHover"
							to="/"
							onClick={handleLinkClick("/")}
						>
							<img className="topImg" src={logo} alt="logo" />
						</Link>
						{/* <span className="person">Самодивата и Караконджулът</span>
						<span className="profession">Поредица</span> */}
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
											ЗА ПОРЕДИЦАТА
										</Link>
									</li>

									{/* <li className="hamburgerMenuItemSectionName">
										<Link
											className="link"
											to="/crafts"
											onClick={handleLinkClick("/crafts")}
										>
											ТВОРЕНИЯ
										</Link>
									</li> */}
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
											to="/orders"
											onClick={handleLinkClick("/orders")}
										>
											ЗА ПОРЪЧКИ
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
									<span>ЗА ПОРЕДИЦАТА</span>
								</Link>
							</li>
							{/* <li className="topListItem">
								<Link
									className="link"
									to="/crafts"
									onClick={handleLinkClick("/crafts")}
								>
									<span>ТВОРЕНИЯ</span>
								</Link>
							</li> */}
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
									to="/orders"
									onClick={handleLinkClick("/orders")}
								>
									<span>ЗА ПОРЪЧКИ</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className="topRight">
						<Player />
						<a
							href="https://www.facebook.com/samodivata.i.karakondjulat"
							target="_blank"
							rel="noreferrer"
						>
							<i className="topIcon fa-brands fa-square-facebook"></i>
						</a>
						<a
							href="https://www.instagram.com/samodivataikarakondjulat/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="topIcon fa-brands fa-instagram"></i>
						</a>
						<a
							href="mailto:samodivataikarakondjulat@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<i class="topIcon fa-solid fa-envelope"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
