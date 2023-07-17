import React from "react";
import Image from "next/image";

const Card = ({
	imageSource,
	title,
	description,
	affiliation,
	liveLink,
	repoLink,
	alltags,
}) => {
	return (
		<div
			className={`lg:max-w-sm border rounded-lg shadow-md bg-slate-700 border-gray-700 w-full hover:scale-[1.025] transition-all flex flex-col   hover:bg-teal-700/5 hover:border-slate-500	
			}`}>
			<a
				href={liveLink ? liveLink : "#projects"}
				target={liveLink ? "_blank" : ""}
				rel="noreferrer">
				{imageSource ? (
					<Image className="rounded-t-lg " alt="" src={imageSource} />
				) : (
					""
				)}
			</a>
			<div className="p-5 ">
				<h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
					{title}
				</h5>
				{alltags.map((text, index) => {
					return (
						<span
							className="inline-block text-slate-200 rounded-lg px-3 py-1 text-sm font-semibold bg-slate-600 mr-2 mb-2"
							key={index}>
							{text}
						</span>
					);
				})}
				{affiliation ? <p className="mb-3  text-white ">{affiliation}</p> : ""}

				<p className="mb-3 font-normal  text-slate-400">{description}</p>
			</div>

			<div className="mt-auto ml-auto mr-3 mb-3 flex gap-3 text-xl ">
				{liveLink && (
					<a
						href={liveLink ? liveLink : "#projects"}
						target={liveLink ? "_blank" : ""}
						rel="noreferrer">
						<i className="fa-solid fa-square-arrow-up-right hover:text-teal-300 transition-all duration-200"></i>
					</a>
				)}
				{repoLink && (
					<a href={repoLink} target="_blank" rel="noreferrer" className="">
						<i className="fa-brands fa-github hover:text-teal-300 transition-all duration-200"></i>
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
