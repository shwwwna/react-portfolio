import React from "react";

const Footer = () => {
	return (
		<>
			<footer className="p-4  rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
				<span className="text-sm  sm:text-center text-gray-400">
					© 2022 Sheena Tuazon. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm  text-gray-400 sm:mt-0">
					<li>
						<a
							href="https://www.linkedin.com/in/sheena-tuazon/"
							target="_blank"
							rel="noreferrer"
							className="mr-4 hover:underline md:mr-6 ">
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="mailto:shwwwna@gmail.com?subject=Web%20Developer%20Inquiry"
							target="_blank"
							rel="noreferrer"
							className="mr-4 hover:underline md:mr-6">
							Email
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/shwwwna"
							target="_blank"
							rel="noreferrer"
							className="mr-4 hover:underline md:mr-6">
							Twitter
						</a>
					</li>
					<li>
						<a
							href="https://www.instagram.com/shwwwna/"
							target="_blank"
							rel="noreferrer"
							className="hover:underline">
							Instagram
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
};

export default Footer;
