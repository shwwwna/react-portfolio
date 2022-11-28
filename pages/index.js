import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import HeroImage from "../public/assets/hero.JPG";

export default function Home() {
	return (
		<>
			<Head>
				<title>Front-End Developer | Sheena</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div class=" grid md:grid-cols-10 text-white bg-slate-800 ">
				<aside class="self-start md:sticky inset-y-0 left-0 col-span-4 flex ">
					<Hero />
				</aside>

				<main class="md:col-span-6 drop-shadow-2xl">
					<div class="md:h-screen h-96 ">
						<Image
							src={HeroImage}
							alt="a picture of me, smiling at you"
							class="grayscale  hover:grayscale-0  transition-all duration-700 md:h-screen h-96 object-cover object-top"
						/>
					</div>
					<div class="md:h-screen h-96 p-14 ">
						<Projects />
					</div>
				</main>
			</div>

			<footer></footer>
		</>
	);
}
