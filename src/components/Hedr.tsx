import React from "react";

export default class Div extends React.Component {
	render() {
		return (
			<div className="fixed w-[100%] ">
				<div className="flex p-2 w-[100%] bg-white items-center border-b-gray-900 justify-between  ">
					<div className="flex items-center gap-4">

						<span className="flex pl-4 items-center gap-1">
							<h1 className="rm text-[#4C4C4C]">R... </h1>
							<h1 className="rm text-[#6930c3]">M</h1>
						</span>
					</div>

					<span className="gap-4 flex items-center">
						<a
							className="a  hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300 "
							href="home"
						>
							Home
						</a>
						<a
							className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300  first-letter: "
							href="about"
						>
							About
						</a>
						<a
							className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
							href="skills"
						>
							Skills
						</a>
						<a
							className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
							href="writeups"
						>
							Writeups
						</a>
						<a
							className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
							href="project"
						>
							Project
						</a>
						<a
							className="a hover:-translate-y-1 hover:scale-110 hover:bg-[#4C4C4C] hover:text-yellow-200 hover:rounded-2xl duration-300"
							href="cotact"
						>
							Contact
						</a>
					</span>
				</div>
			</div>
		);
	}
}
