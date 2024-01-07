import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

export default function Raa() {

	const background: BannerLayer = {
		image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
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
			<div data-aos="fade-up"
			data-aos-anchor-placement="bottom-bottom" className="inset center ">
				<h1 className="about">About</h1>
				<div className=" flex items-center w-[80%] pt-4 gap-1 justify-between">
					<div  >
						<h1 className="headline ">
							Hello, my name is Muhammad, <br /> I am currently a Frontend Developer at <br /> Pdp Academy .

							I'm learning programming, <br /> I like html, css, sass, bootstrap, javascript. <br />
							I know react, typescript and tailwind <br /> languages. I also want to learn backend{" "}
							<br /> in future
						</h1>
					</div>
					<div  >
						<h1 className="headline  flex flex-col gap-2">
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

	const foreground: BannerLayer = {
		image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
		translateY: [0, 15],
		scale: [1, 1.1, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
	};

	const gradientOverlay: BannerLayer = {
		opacity: [0, 1, "easeOutCubic"],
		shouldAlwaysCompleteAnimation: true,
		expanded: false,
		children: <div className="gradient inset" />,
	};

	return (
		<ParallaxBanner layers={[background, headline, foreground, gradientOverlay]} className="full" />
	);
};
