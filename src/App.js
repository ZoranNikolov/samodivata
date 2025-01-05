import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import Gallery from './components/posts/gallery/gallery';
import SingleGallery from './components/posts/gallery/singleGallery/singleGallery';
import Blog from './pages/blog/blog';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Crafts from './components/posts/crafts/crafts';
// import SingleCraft from './components/posts/crafts/singleEvent/singleCraft';
import Orders from './pages/orders/Orders';

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
        <title>Самодивата и караконджулът - поредица</title>
        <meta name="description" content="Завладяваща поредица за мистичните създания по нашите земи" />
        <meta name="keywords" content="Фентъзи, Книга, Поредица, Самодива, Караконджул, Фолклор, Традиции" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/crafts" element={<Crafts />} /> */}
        {/* <Route path="/crafts/:craftId" element={<SingleCraft />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:galleryId" element={<SingleGallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
