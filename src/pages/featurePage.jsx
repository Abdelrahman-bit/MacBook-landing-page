import { useParams } from "react-router-dom";
import Header from "../components/Header";
import data from "../data";

function Feature() {
	const params = useParams();
	const feature = data.features.find((elem) => elem.id === params.id);
	const { title, content, pageImage } = feature;
	console.log(feature);

	return (
		<>
			<Header />
			<main className='bg-[#0e0e0e]'>
				<div className='w-full pt-25 pb-5 lg:h-svh flex content-center justify-center'>
					<div className='w-9/10  sm:w-5xl '>
						<img className='rounded-2xl ' src={pageImage} alt='' />
					</div>
				</div>
        <div className="text-gray-100 flex flex-col justify-center items-center px-10 sm:px-25 pb-5 ">
          <h1 className="text-3xl sm:text-4xl pb-5"> {title} </h1>
          <p className=" text-[1.1rem]/9 sm:text-xl/9"> {content} </p>
        </div>
			</main>
		</>
	);
    
}

export default Feature;
