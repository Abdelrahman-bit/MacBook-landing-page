import performancIcon from "./assets/png/high-performance.png";
import inteligent from "./assets/png/ai.png";
import battery from "./assets/png/charging.png";

import performancPage from "./assets/performance.jpg";
import aiPage from "./assets/ai.jpg";
import battryPage from "./assets/battery.jpg";

const data = {
	features: [
		{
			id: "1",
			icon: performancIcon,
			title: "M4: Performance to the Next Level",
			content:
				"With M4 in MacBook Air, everything from daily activities like multitasking between apps to more demanding tasks like photo and video editing is faster and more fluid. The M4 chip features a powerful 10-core CPU, an up to 10-core GPU, and support for up to 32GB of unified memory, making the new MacBook Air up to 2x faster than the M1 model.1 When compared to the fastest Intel-based MacBook Air, the M4 model delivers up to 23x faster performance.1 With battery life on the new MacBook Air up to 18 hours, Intel-based upgraders will get up to six additional hours, so they can get more done on a single charge.1 The powerful Neural Engine in the M4 chip, which accelerates AI-based tasks, is also up to 3x faster than on MacBook Air with M1, significantly increasing speed in tasks like automatically enhancing photos and removing background noise from a video",
			pageImage: performancPage,
		},
		{
			id: "2",
			icon: inteligent,
			title: "Built for Apple Intelligence",
			content:
				"MacBook Air is built for Apple Intelligence, unlocking exciting new capabilities that make Mac even more helpful and powerful. Users can explore creative new ways to express themselves visually with Image Playground, create the perfect emoji with Genmoji, and make their writing even more dynamic with Writing Tools. With new Siri improvements, users can move fluidly between spoken and typed requests to accelerate tasks throughout their day, and Siri can answer thousands of questions about Mac features and settings, with step-by-step instructions for how to do something on Mac. With access to ChatGPT seamlessly integrated into Writing Tools and Siri, users can choose to access ChatGPT’s expertise so they can get things done faster and easier than ever before. Users can access ChatGPT for free without creating an account, and privacy protections are built in — their IP addresses are obscured and OpenAI won’t store requests. Users can choose whether to enable ChatGPT integration, and are in full control of when they use it and what information is shared with ChatGPT.",
			pageImage: aiPage,
		},
		{
			id: "3",
			icon: battery,
			title: "up to 18 hours of battery life",
			content:
				"MacBook Air is designed with the environment in mind. As part of Apple 2030, the company’s ambitious goal to be carbon neutral across its entire carbon footprint by the end of this decade, Apple is transitioning to renewable electricity for manufacturing, and investing in wind and solar projects around the world to address the electricity used to charge all Apple products, including MacBook Air. Today, all Apple facilities run on 100 percent renewable electricity — including the data centers that power Apple Intelligence.To achieve Apple 2030, the company is designing products with more recycled and renewable materials, which further drives down the carbon footprint. MacBook Air features over 55 percent recycled content overall, the most in any Apple product. This includes 100 percent recycled aluminum in the enclosure and 100 percent recycled rare earth elements in all magnets. The battery contains 100 percent recycled cobalt and — in a first for any Mac — over 95 percent recycled lithium. MacBook Air meets Apple’s high standards for energy efficiency, and is free of mercury, brominated flame retardants, and PVC. The packaging is entirely fiber-based, bringing Apple closer to its goal to remove plastic from all packaging by the end of 2025.",
			pageImage: battryPage,
		},
	],
	users: [],
};

export default data;
