import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about/About";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Gallery from "./components/posts/gallery/gallery";
import Events from "./components/posts/events/events";
import SingleEvent from "./components/posts/events/singleEvent/singleEvent";
import SingleGallery from "./components/posts/gallery/singleGallery/singleGallery";
import Blog from "./pages/blog/blog";
import News from "./pages/news/news";
import SingleNews from "./pages/news/singleNews/singleNews";

function ScrollToTopOnRouteChange() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	return (
		<BrowserRouter>
			<ScrollToTopOnRouteChange />
			<TopBar />
			<Helmet>
				<title>Читалище Светилна - с. Голямо Враново</title>
				<meta name="description" content="Запазване и развитие на българските фолклор и традиции"/>
				<meta name="keywords" content="Читалище, Фолклор, Традиции"/>
			</Helmet>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/news" element={<News />} />
				<Route path="/news/:newsId" element={<SingleNews />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/:eventId" element={<SingleEvent />} /> 
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/gallery/:galleryId" element={<SingleGallery />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
