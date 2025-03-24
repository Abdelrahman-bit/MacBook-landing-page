import { Link } from "react-router-dom";
function Button() {
	return (
		<button className='cursor-pointer p-2 rounded-xl bg-gradient-to-br from-cyan-100 to-zinc-500 '>
			<Link to='/contact'>Contact ust</Link>
		</button>
	);
}

export default Button;
 