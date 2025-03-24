import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
const Header = (props) => {
	const {pathname} = useLocation()
	
  return (
		<header className='py-3 px-5 top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  my-5 w-9/10 rounded-2xl bg-[#e4e4e422] flex justify-between items-center backdrop-blur-xl fixed z-11 drop-shadow-sm sm:w-9/10'>
			<div>
				<Link to='/' className='cursor-pointer text-gray-200 text-2xl font-medium'>
					{" "}
					Macbook Air{" "}
				</Link>
			</div>
			<div className='flex justify-between gap-9 items-center sm:gap-10'>
				{props.isFeaturePage || (
					<Link
						className='cursor-pointer font-semibold  text-gray-200'
						to={pathname === "/" ? "#features" : "/#features"}
						onClick={(e) => {
							if (pathname === "/") {
								e.preventDefault(); // Prevents default navigation behavior
								const element = document.querySelector("#features");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
								}
							}
						}}
					>
						Featuers
					</Link>
				)}
				{props.isContactPage || <Button />}
			</div>
		</header>
  );
}

export default Header
