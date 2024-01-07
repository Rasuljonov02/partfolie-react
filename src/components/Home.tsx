import React, { useEffect } from "react";
import Typed from "typed.js";
import ozim from "../img/2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
class Cell extends React.Component {
	private el: HTMLSpanElement | null = null;
	private typed: Typed | undefined;

	componentDidMount() {
		if (this.el) {
			this.typed = new Typed(this.el, {
				strings: ["Rasuljonov Muhammad", "Frontend Developer"],
				typeSpeed: 80,
				backDelay: 500,
				loop: true,
				loopCount: Infinity,
				startDelay: 500,
				backSpeed: 90,
				showCursor: true,
				cursorChar: "/",
				autoInsertCss: true,
			});
		}
	}

	render() {
		return (
			<div className="" id="home">
				<div id="imglar" className="grid bg-white  place-items-center w-[100%] h-[650px] pt-7">
					<img className="w-[300px] rounded-[50%]" src={ozim} alt="" />
					<div className="grid place-items-center gap-3">
						<span className="flex items-center gap-3">
							<h1 className="im">I'm</h1> <span className="imm" ref={(el) => (this.el = el)} />
						</span>
						<span className="flex ml-5 items-center gap-1">
							<h1 className="f text-[#343434]">Frontend Developer </h1>
							<h1 className="f text-[#6930c3]">/rise to dreams</h1>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Cell;
