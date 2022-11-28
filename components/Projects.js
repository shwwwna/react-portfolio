import React from "react";
import Card from "./Card";
import Freemodoro from "../public/assets/Freemodoro.png";

const Projects = () => {
	return (
		<>
			<h1>I like to create!</h1>
			<h2>Check out some of the things I’ve built.</h2>
			<Card
				src={Freemodoro}
				h5="Freemodoro"
				p=""
				a1=""
				a2=""
				alltags={["waa", "waa"]}
			/>
		</>
	);
};

export default Projects;
