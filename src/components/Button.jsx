import { Link } from "react-router-dom";
function Button(props) {
	return (
		<button className ={ ` cursor-pointer p-2 rounded-xl bg-gradient-to-br from-cyan-100 to-zinc-500 md:text-[16px] ${props.className} `}>
			<Link to='/contact'> {props.value? props.value : 'Contact us'} </Link>
		</button>
	);
}

export default Button;
 