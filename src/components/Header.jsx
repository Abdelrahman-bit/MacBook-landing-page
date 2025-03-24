import { Link } from "react-router-dom";
import Button from "./Button";
const Header = () => {
  return (
		<header className='py-3 px-5 top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  my-5 w-9/10 rounded-2xl bg-[#e4e4e422] flex justify-between items-center backdrop-blur-xl fixed z-11 drop-shadow-sm sm:w-9/10'>
			<div>
				<Link to='/' className='cursor-pointer text-gray-200 text-2xl font-medium'> Macbook Air </Link>
			</div>
			<div className='flex justify-between gap-9 items-center sm:gap-10'>
				<a className='cursor-pointer font-semibold  text-gray-200' href="#features">Featuers</a>
				<Button />
			</div>
		</header>
  );
}

export default Header
// background: rgb(0,0,0);
// background: linear-gradient(144deg, rgba(0,0,0,1) 0%, rgba(28,28,28,1) 35%, rgba(70,70,70,1) 79%, rgba(132,132,132,1) 100%);