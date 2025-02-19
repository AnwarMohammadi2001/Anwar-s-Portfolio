import { useEffect } from "react";
import { About, Hero, Tech } from "../components";
import Social from "../components/Social";

function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behaviour: "smooth" });
	}, []);
	return (
		<div className='relative z-0 bg-primary'>
			<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
				<Hero />
			</div>
			<About />
			<Tech />
			<Social />
		</div>
	);
}

export default Home;
