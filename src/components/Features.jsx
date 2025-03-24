import Card from "./Card";
import data from "../data";

function Features() {
	const { features } = data;
	return (
		<div id='features' className='bg-[#191a1e] text-gray-100 flex flex-col items-center content-center'>
			<h1 className='text-7xl pb-5 '>Our Features </h1>
			<h3 className='text-2xl text-gray-300'>Unlock the Potential</h3>
			<div className='flex flex-col items-center justify-between lg:flex-row sm:px-9'>
				{features.map((feature, index) => <Card key={index} id={feature.id} icon={feature.icon} title={feature.title} content={feature.content} />)}
			</div>
		</div>
	);
}

export default Features;
