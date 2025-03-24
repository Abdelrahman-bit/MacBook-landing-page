import macbookTouchId from "../assets/Apple-MacBook-Air-Touch-ID-and-Magic-Keyboard.jpg";
import macbookTopView from "../assets/Apple-MacBook-Air-top-view.jpg";
import macbookSideView from "../assets/Apple-MacBook-Air-side-view.jpg";

function Photos() {
  return (
	<div className='flex justify-between gap-2 p-5 sm:py-20 bg-[#0e0e0e] z-10'>
		<div className='w-45 h-35 sm:w-60 sm:h-60 lg:h-100 lg:w-100 xl:h-120 xl:w-120 mix-blend-hard-light z-10'>
			<img className='w-full h-full rounded-xl bg-cover' src={macbookTouchId} alt='macbook image' />
		</div>
		<div className='w-45 h-35 sm:w-60 sm:h-60 lg:h-100 lg:w-100 xl:h-120 xl:w-120 mix-blend-hard-light z-10'>
			<img className='w-full h-full rounded-xl ' src={macbookSideView} alt='macbook image' />
		</div>
		<div className='w-45 h-35 sm:w-60 sm:h-60 lg:h-100 lg:w-100 xl:h-120 xl:w-120 mix-blend-hard-light z-10'>
			<img className='h-full rounded-xl ' src={macbookTopView} alt='macbook image' />
		</div>
	</div>
  );
}

export default Photos