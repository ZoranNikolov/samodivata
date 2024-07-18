import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange({ to }) {
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== to) {
			window.scrollTo(0, 0);
		}
	}, [pathname, to]);

	return null;
}

export default ScrollToTopOnRouteChange;
