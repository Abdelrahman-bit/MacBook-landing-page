import { Link } from 'react-router-dom';
import Button from './Button';

function Footer() {
  return (
		<footer className='bg-[#0f1012] flex flex-col md:flex-row gap-10 md:gap-3 p-25 md:px-10 w-full justify-around items-center md:items-start  '>
			<div className='flex flex-col gap-3 justify-center items-start [&_button]:w-5/10 [&_button]:text-white '>
				<h1 className='md:text-4xl/15 text-2xl text-gray-100 font-mono max-w-sm md:max-w-md '> Connecting You to the Future </h1>
				<p className='text-gray-300 py-3'>Explore the Possibilities</p>
				<Button className='w-2xl'/>
			</div>
			<div className='flex justify-between gap-9 items-start md:w-5/10 [&_p]:text-gray-300 [&_h1]:text-gray-50 lg:[&_h1]:text-3xl [&_h1]:mb-4 [&_p]:mb-4 '>
				<div className='flex flex-col'>
					<h1 className=''> About Us </h1>
					<p>our mission</p>
					<p> our values </p>
					<p>our team</p>
					<p> Get In </p>
				</div>
				<div>
					<h1>Support</h1>
					<p>FAQs</p>
					<p>Careers</p>
					<p> Press </p>
					<p> Blog </p>
				</div>
				<div>
					<h1>Terms Of Services</h1>
					<p> Privacy Policy </p>
					<p> Accessability </p>
					<p> sustainability </p>
					<Link to='/contact' className='text-gray-300'> Contact </Link>
				</div>
			</div>
		</footer>
  );}

export default Footer