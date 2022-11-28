import React from "react";

const Hero = () => {
	return (
		<div
			class="md:h-screen h-full  flex flex-col justify-center    p-14 "
			id="sidebar">
			<div className="text-sm text-g opacity-80 ">
				<div class="has-tooltip">
					<span class="tooltip rounded shadow-lg p-1 bg-gray-700 italic   -mt-8 ">
						How are you?
					</span>
					<div className="italic ">Kamusta?</div>
				</div>
				<div>I’m Sheena! I’m a</div>
			</div>

			<h1 className="text-4xl	md:text-5xl font-bold">Front-end Web Developer</h1>
			<div className="py-4 gap-2 flex flex-col opacity-80 ">
				<div className="">Passionate about turning ideas into reality.</div>
				<div className="">
					I design & build effective websites & web apps through frontend web
					technologies, specializing in ReactJS & Webflow.
				</div>
				<div className="">Currently, I’m looking for full-time work.</div>
			</div>
			<div className="">
				<button
					type="button"
					class="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none transition-all duration-200 shadow w-full md:w-fit ">
					Download my resume
				</button>

				<button
					type="button"
					class=" border border-gray-300 focus:outline-none hover:bg-teal-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  transition-all duration-200 shadow w-full md:w-fit ">
					Contact me
				</button>
			</div>
		</div>
	);
};

export default Hero;
