import React from "react";
import Card from "./Card";
import Freemodoro from "../public/assets/Freemodoro.png";
import Shopna from "../public/assets/Shopna.jpg";
import Gasoliknow from "../public/assets/gasoliknow.png";

const Projects = () => {
	return (
		<>
			<div className="flex items-center flex-col">
				<h1 className="font-bold text-4xl mt-0 mb-2 ">I like to create!</h1>
				<h2 className="  mt-0 mb-8 text-gray-300">
					Check out some of the webapps I’ve built.
				</h2>
			</div>
			{/* flex gap-3 flex-wrap   */}
			<div className="flex items-center justify-center">
				<div className="grid md:grid-cols-2   gap-4   ">
					<Card
						className="basis-full grow"
						imageSource={Freemodoro}
						title="Freemodoro"
						description="Freemodoro is a Pomodoro timer that gives you both freedom and discipline in setting your work & rest times! "
						liveLink="https://freemodoro.vercel.app/"
						repoLink="https://github.com/shwwwna/freemodoro"
						alltags={["ReactJS", "styled-components"]}
					/>

					<Card
						className="basis-full grow"
						imageSource={Gasoliknow}
						title="Gasoliknow"
						description="Gasoliknow is a fuel cost calculator that I use a lot."
						liveLink="https://gasoliknow.vercel.app/"
						repoLink="https://github.com/shwwwna/gasoliknow"
						alltags={["NextJS", "Chakra UI"]}
					/>
					<Card
						imageSource={""}
						title="Shopna"
						description="Online shop UI. Navigable front-end of an e-commerce app.  "
						liveLink="https://shwwwna-shopna.vercel.app/"
						repoLink="https://github.com/shwwwna/ecommerce"
						alltags={["ReactJS", "styled-components"]}
					/>
					{/* <Card
						imageSource={""}
						title="Todonato"
						description="To-do app with authentication and storage."
						liveLink=""
						repoLink=""
						alltags={["NextJS", "TailwindCSS", "Firebase"]}
					/> */}
					<Card
						imageSource={""}
						title="Recipe directory"
						description="Recipe app with search functionality that pulls data from an API."
						liveLink="https://shwwwna-recipes.vercel.app/"
						repoLink="https://github.com/shwwwna/recipe-app"
						alltags={["ReactJS", "Edamam API"]}
					/>
					<Card
						imageSource={""}
						title="Shwwwna"
						description="Portfolio of works in Webflow. "
						liveLink="https://shwwwna.webflow.io/"
						repoLink=""
						alltags={["Webflow"]}
					/>
					<Card
						imageSource={""}
						title="Web Developer Portfolio"
						description="You are here! "
						liveLink=""
						repoLink="https://github.com/shwwwna/react-portfolio"
						alltags={["NextJS", "TailwindCSS"]}
					/>
				</div>
			</div>
		</>
	);
};

export default Projects;
