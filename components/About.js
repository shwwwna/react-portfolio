import React from "react";

const About = () => {
	return (
		<>
			<div className="py-4 gap-2 flex flex-col max-w-prose	 ">
				<h1 className="font-bold text-4xl mt-0 mb-2  ">Sheena Tuazon</h1>
				<div className="">
					I’m a Front-end Designer and Developer based in the Philippines.
				</div>
				<div className="">
					My interest started back in 2007. When I was 9 years old, I designed
					and built a self-hosted blog using Photoshop and free hosting & domain
					services. I have always been enthusiastic about finding the best
					websites, software, and apps.
				</div>
				<div className="">
					Passionate in creating user-friendly apps that make life better and
					more efficient, I aim to help make an impact for businesses. I also
					keep a database of my webapp ideas to be developed in the future - 70
					and counting! Now, after discovering my calling - I am pursuing a
					career in tech, eager to never stop learning.
				</div>
				<h1 className="text-xl  mt-10 mb-2 ">My tech stack</h1>
				<h2 className=" text-lg font-semibold text-white"></h2>
				<dl className=" divide-y  text-white divide-gray-700">
					<div className="flex flex-col pb-3">
						<dt className="mb-1  md:text-lg text-gray-400">Javascript</dt>
						<dd className="text-lg font-semibold">ReactJS, NextJS, Vite</dd>
					</div>
					<div className="flex flex-col py-3">
						<dt className="mb-1  md:text-lg text-gray-400">CSS</dt>
						<dd className="text-lg font-semibold">
							Material UI, TailwindCSS, styled-components
						</dd>
					</div>
					{/* <div className="flex flex-col py-3">
						<dt className="mb-1  md:text-lg text-gray-400">Backend</dt>
						<dd className="text-lg font-semibold">Firebase</dd>
					</div> */}
					<div className="flex flex-col py-3">
						<dt className="mb-1  md:text-lg text-gray-400">
							Visual development
						</dt>
						<dd className="text-lg font-semibold">Webflow</dd>
					</div>
					<div className="flex flex-col pt-3">
						<dt className="mb-1  md:text-lg text-gray-400">Design</dt>
						<dd className="text-lg font-semibold">Figma, Adobe Photoshop</dd>
					</div>
				</dl>
			</div>
		</>
	);
};

export default About;
