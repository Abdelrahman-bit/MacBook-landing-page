import {Link} from 'react-router-dom'
function Card(props) {
  const {icon, title, content, id} = props;
  return (
		<div className='bg-[#252429] flex flex-col items-center content-center w-3/4 lg:w-3/10 gap-4 p-8 rounded-3xl mt-9 '>
			<div className='#252429'>
				<img src={icon} alt='icon' className='w-15 ' />
			</div>
			<div>
				<h1 className='sm:text-sm text-2xl lg:text-2xl text-gray-50 font-semibold'> {title} </h1>
			</div>
			<div>
				<p className='text-gray-300 sm:text-xs lg:text-sm line-clamp-6'>{content}</p>
			</div>
			<Link to={"/feature/" + id} className='self-end text-gray-400'>
				Read More
			</Link>
		</div>
  );
}

export default Card