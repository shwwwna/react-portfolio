import React from "react";
import Image from "next/image";

const Card = ({
	imageSource,
	title,
	description,
	liveLink,
	repoLink,
	alltags,
}) => {
	return (
		<div
			className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-700 dark:border-gray-700 w-full hover:scale-105 transition-all flex flex-col  
			}`}>
			<a
				href={liveLink ? liveLink : "#projects"}
				target={liveLink ? "_blank" : ""}
				rel="noreferrer">
				{imageSource ? (
					<Image className="rounded-t-lg" alt="" src={imageSource} />
				) : (
					""
				)}
			</a>
			<div className="p-5 relative ">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				{alltags.map((text, index) => {
					return (
						<span
							className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
							key={index}>
							{text}
						</span>
					);
				})}
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{description}
				</p>

				<div className="absolute bottom-0 right-0 px-3 py-1 flex gap-3 text-xl ">
					{liveLink && (
						<a
							href={liveLink ? liveLink : "#projects"}
							target={liveLink ? "_blank" : ""}
							rel="noreferrer">
							<i className="fa-solid fa-square-arrow-up-right"></i>
						</a>
					)}
					{repoLink && (
						<a href={repoLink} target="_blank" rel="noreferrer" className="">
							<i className="fa-brands fa-github"></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
