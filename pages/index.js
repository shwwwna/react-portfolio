import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import HeroImage from "../public/assets/hero.png";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Front-End Developer | Sheena</title>
				<meta
					name="description"
					content="I design & build effective websites & web apps through frontend web technologies, specializing in ReactJS & Webflow."
				/>
				<meta
					property="og:image"
					content="https://github.com/shwwwna/react-portfolio/blob/main/public/assets/opengraph.png?raw=true"
				/>
			</Head>

			<div className="lg:grid lg:grid-cols-10 selection:bg-teal-900 selection:text-slate">
				<aside
					className="self-start lg:sticky lg:h-screen  top-0 col-span-3 flex p-14 flex-col justify-center "
					id="sidebar">
					<Hero />
				</aside>

				<main className="lg:col-span-7 text-white bg-slate-800 drop-shadow-2xl ">
					<div className="   ">
						<Image
							src={HeroImage}
							alt="a picture of me, smiling at you"
							className="lg:h-screen sm:h-[50rem] h-96 grayscale  hover:grayscale-0   transition-all duration-700  object-cover object-top w-full "
							priority="true"
						/>
					</div>
					<div className="  p-14 ">
						<Projects id="projects" />
					</div>
					<div className=" flex items-center flex-col p-14  ">
						<About />
					</div>
					<Footer />
				</main>
			</div>
		</>
	);
}
