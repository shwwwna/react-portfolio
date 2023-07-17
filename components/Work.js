import React from "react";
import Card from "./Card";
import iDialogue from "../public/assets/iDialogue.jpg";
import AIAssistants from "../public/assets/AIAssistants.gif";

const Projects = () => {
	return (
		<>
			<div className="flex items-center flex-col">
				<h1 className="font-bold text-4xl mt-0 mb-2 ">Work experience</h1>
				<h2 className="  mt-0 mb-8 text-gray-300">
					A selection of Client projects
				</h2>
			</div>
			<div className="flex items-center justify-center">
				<div className="grid md:grid-cols-2   gap-4   ">
					<Card
						className="basis-full grow"
						imageSource={iDialogue}
						title="iDialogue"
						affiliation={
							<>
								For{" "}
								<a
									href="https://getpacificapps.com/"
									className="hover:underline hover:decoration-teal-500"
									target="_blank"
									rel="noreferrer">
									Pacific Apps
								</a>
							</>
						}
						description="Re-design of a marketing website that increased conversions due to improved clarity and page speed. Check out the interactive diagram in the Content Cloud page and the Pricing page!"
						liveLink="https://www.idialogue.app/"
						alltags={["HTML", "CSS", "JS"]}
					/>

					<Card
						className="basis-full grow"
						imageSource={AIAssistants}
						title="AI Assistants"
						affiliation={
							<>
								For{" "}
								<a
									href="https://getpacificapps.com/"
									className="hover:underline hover:decoration-teal-500"
									target="_blank"
									rel="noreferrer">
									Pacific Apps
								</a>
							</>
						}
						description="Front-end of a Conversational AI app inside Salesforce."
						alltags={["Salesforce Lightning Aura"]}
					/>
					<Card
						imageSource={""}
						title="Women Freelancers PH"
						affiliation={
							<>
								In collaboration with{" "}
								<a
									href="https://claraandcostudio.com//"
									className="hover:underline hover:decoration-teal-500"
									target="_blank"
									rel="noreferrer">
									Clara & Co. Creative Studio
								</a>
								{" and "}
								<a
									href="https://www.arclabssoftware.com/"
									className="hover:underline hover:decoration-teal-500"
									target="_blank"
									rel="noreferrer">
									ARCLABS
								</a>
							</>
						}
						description="Designed a freelancer directory web application."
						alltags={["Figma"]}
					/>
					<Card
						imageSource={""}
						title="Lance Punay"
						description="Portfolio website with CMS."
						liveLink="https://lancepunay.com/"
						alltags={["Webflow", "Relume Library", "Finsweet Attributes"]}
					/>
				</div>
			</div>
		</>
	);
};

export default Projects;
