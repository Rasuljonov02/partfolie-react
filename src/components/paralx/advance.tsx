import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export default function Raa() {
	const background: BannerLayer = {
		image: "https://i.pinimg.com/originals/93/72/e8/9372e881397e867c7f2bca42c3fdd1e9.jpg",
		translateY: [0, 50],
		opacity: [1, 0.3],
		scale: [1.05, 1, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
	};

	const headline: BannerLayer = {
		translateY: [0, 30],
		scale: [1, 1.05, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: (
			<div
				data-aos="fade-up"
				data-aos-anchor-placement="bottom-bottom"
				className="inset center p-5 mt-28"
				id="about"
			>

				<h1 id="about1" className="">About</h1>
				<div className=" flex items-center w-[80%] pt-4 gap-1 justify-between flex-wrap">
					<div>
						<h1 id="about" className="headline mt-2">
							Hello, my name is Muhammad, <br /> I am currently a Frontend Developer at <br /> Pdp
							Academy . I'm learning programming, <br /> I like html, css, sass, bootstrap,
							javascript. <br />
							I know react, typescript and tailwind <br /> languages. I also want to learn backend{" "}
							<br /> in future
						</h1>
					</div>
					<div>
						<h1 id="about" className="headline  ">
							Surname: Rasuljanov <br />
							Name: Muhammad <br />
							Age: 22 <br />
							Date of birth: 2002.02.10 <br />
							Hobby: Programmer <br />
							Address: Tashkent
						</h1>
					</div>
				</div>
			</div>
		),
	};

	return (
		<ParallaxBanner layers={[background, headline]} className="full" />
	);
}
