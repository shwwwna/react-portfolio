import React from "react";

const Hero = () => {
	return (
		<div className="group">
			<div className="text-sm text-g opacity-80 ">
				<div className="has-tooltip">
					<span className="tooltip rounded shadow-lg p-1 bg-teal-700 italic   -mt-8 ">
						How are you?
					</span>
					<div className="italic ">Kamusta?</div>
				</div>
				<h3>I’m Sheena Tuazon,</h3>
			</div>

			<h1 className="text-4xl	md:text-5xl font-bold">Front-end Web Developer</h1>
			<div className="py-4 gap-2 flex flex-col opacity-80 max-w-prose	 ">
				<div className="">Passionate about turning ideas into reality.</div>
				<div className="">
					I design & build effective websites & web apps through frontend web
					technologies, specializing in{" "}
					<span className="group-hover:underline decoration-teal-500/80 decoration-4">
						{" "}
						ReactJS
					</span>
					.
				</div>
				<div
					id="alert-5"
					class="flex p-4  rounded-lg bg-black/50  mix-blend-hard-light  w-full md:w-fit	"
					role="alert">
					<svg
						aria-hidden="true"
						class="flex-shrink-0 w-5 h-5 text-gray-300"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"></path>
					</svg>
					<span class="sr-only">Info</span>
					<div class="ml-3 text-sm font-medium mix-blend-normal text-gray-300">
						Currently, I am looking for part-time work.
					</div>
				</div>
			</div>
			<div className="flex flex-wrap">
				<a
					type="button"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/sheena-tuazon/"
					className="border border-slate-900 text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2  focus:outline-none transition-all duration-200 shadow w-full md:w-fit text-center ">
					Connect in LinkedIn
				</a>

				<a
					type="button"
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/1_py2XW-1qUlOKZjQRU1-i_cf9TJuTJFC/view?usp=share_link"
					className=" border border-gray-300 focus:outline-none hover:bg-teal-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2  transition-all duration-200 shadow w-full md:w-fit text-center ">
					Download resume
				</a>
			</div>
		</div>
	);
};

export default Hero;
