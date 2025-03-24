import heroImage from "../assets/png/Apple-MacBook-Air-lineup.png";
import Button from "./Button";

function Hero() {
	return (
		<main className='flex items-center z-10 justify-between gap-3 bg-gradient-to-br from-neutral-900 to-gray-900 h-screen'>
			<div className='absolute w-40 h-50 sm:w-50 sm:h-70 lg:w-70 lg:h-90 z-0 rounded-full bg-cyan-800 top-30 right-10 blur-3xl'></div>
			<div className='absolute w-30 h-30 sm:w-40 sm:h-50 lg:w-50 lg:h-70  left-20 top-100 z-0 rounded-full bg-amber-900 blur-3xl lg:left-20'></div>
			<div className='w-60% pl-7 z-10'>
				<h1 className='text-3xl text-wrap mb-5 min-w-10/12 font-semibold color text-gray-100 sm:text-xl md:text-3xl'>
					The world’s most popular laptop delivers more value than ever, with greater performance, up to 18 hours of
					battery life
				</h1>
				<Button />
			</div>
			<div className='hidden sm:block z-10 sm:max-w-2/4'>
				<img src={heroImage} alt='MacBook image' />
			</div>
		</main>
	);
}

export default Hero;
