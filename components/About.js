import React from "react";

const About = () => {
	return (
		<>
			<h1 className="font-bold text-4xl mt-0 mb-2 ">Sheena Tuazon</h1>
			<div className="py-4 gap-2 flex flex-col max-w-prose	 ">
				<div className="">
					I’m a Front-end Designer and Developer based in the Philippines.{" "}
				</div>
				<div className="">
					My interest started back in 2007, when I was 9 years old. I designed
					and built a self-hosted blog using Photoshop and free hosting & domain
					services. I have been always enthusiastic about finding the best
					websites, software, and apps.
				</div>
				<div className="">
					Having a passion for efficiency, I have always been interested in
					user-friendly apps that make life better. Now, after discovering my
					calling - I am pursuing a career in tech, eager to never stop
					learning.
				</div>
			</div>
			<div className="md:w-[65ch] p-14 md:p-0 mt-10 ">
				<h1 className="text-xl  mt-0 mb-2 ">My tech stack</h1>
				<h2 class=" text-lg font-semibold text-white"></h2>
				<dl class=" divide-y  text-white divide-gray-700">
					<div class="flex flex-col pb-3">
						<dt class="mb-1  md:text-lg text-gray-400">Javascript</dt>
						<dd class="text-lg font-semibold">ReactJS, NextJS</dd>
					</div>
					<div class="flex flex-col py-3">
						<dt class="mb-1  md:text-lg text-gray-400">CSS</dt>
						<dd class="text-lg font-semibold">
							Material UI, TailwindCSS, styled-components
						</dd>
					</div>
					<div class="flex flex-col py-3">
						<dt class="mb-1  md:text-lg text-gray-400">Backend</dt>
						<dd class="text-lg font-semibold">Firebase</dd>
					</div>
					<div class="flex flex-col py-3">
						<dt class="mb-1  md:text-lg text-gray-400">Visual development</dt>
						<dd class="text-lg font-semibold">Webflow</dd>
					</div>
					<div class="flex flex-col pt-3">
						<dt class="mb-1  md:text-lg text-gray-400">Design</dt>
						<dd class="text-lg font-semibold">Figma, Adobe Photoshop</dd>
					</div>
				</dl>
			</div>
		</>
	);
};

export default About;
