import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../router/ScrolToTop";

function FeaturePage() {
	const { title, content, pageImage } = useLoaderData();

	return (
		<>
			<ScrollToTop />
			<Header isFeaturePage={true} />
			<main className='bg-[#0e0e0e] pb-10'>
				<div className='w-full pt-25 pb-5 lg:h-svh flex content-center justify-center'>
					<div className='w-9/10  sm:w-5xl '>
						<img className='rounded-2xl ' src={pageImage} alt='' />
					</div>
				</div>
				<div className='text-gray-100 flex flex-col justify-center items-center px-10 sm:px-25 pb-5 '>
					<h1 className='text-3xl sm:text-4xl pb-5'> {title} </h1>
					<p className=' text-[1.1rem]/9 sm:text-xl/9'> {content} </p>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default FeaturePage;
