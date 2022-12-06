import React from "react";

const Hero = () => {
	return (
		<>
			<div className="text-sm text-g opacity-80 ">
				<div className="has-tooltip">
					<span className="tooltip rounded shadow-lg p-1 bg-gray-700 italic   -mt-8 ">
						How are you?
					</span>
					<div className="italic ">Kamusta?</div>
				</div>
				<h3>I’m Sheena Tuazon,</h3>
			</div>

			<h1 className="text-4xl	md:text-5xl font-bold">Front-end Web Developer</h1>
			<div className="py-4 gap-2 flex flex-col opacity-80 max-w-prose	group ">
				<div className="">Passionate about turning ideas into reality.</div>
				<div className="">
					I design & build effective websites & web apps through frontend web
					technologies, specializing in{" "}
					<span className="group-hover:underline decoration-white decoration-4">
						{" "}
						ReactJS
					</span>
					.
				</div>
				<div className="">
					Currently, I’m looking for{" "}
					<span className="group-hover:underline decoration-white decoration-4">
						full-time work.
					</span>
				</div>
			</div>
			<div className="flex flex-wrap">
				<a
					type="button"
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/1_py2XW-1qUlOKZjQRU1-i_cf9TJuTJFC/view?usp=share_link"
					className="border border-slate-900 text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none transition-all duration-200 shadow w-full md:w-fit text-center ">
					Download my resume
				</a>

				<a
					type="button"
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/sheena-tuazon/"
					className=" border border-gray-300 focus:outline-none hover:bg-teal-700 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  transition-all duration-200 shadow w-full md:w-fit text-center ">
					Contact me
				</a>
			</div>
		</>
	);
};

export default Hero;
