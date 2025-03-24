import star from '../assets/png/star.png'
function Card(props) {
    const { img, content, name, rate } = props.user;

    const numberOfStars = (num)=>{
        let starsArr= []
        for(let i=0; i<num; i++){
            starsArr.push(<img key={i} src={star} alt='star' className='w-5' />);
        }
        return starsArr
    }
    
  return (
		<div className='bg-[#030712] flex flex-col text-gray-100 p-5 rounded-3xl '>
			<div className='flex px-5 items-center justify-between '>
				<div className='flex items-center gap-3 '>
					<img src={img} alt='user image' className='w-13 rounded-full border-3' />
					<p className='text-sm text-gray-200'> {name} </p>
				</div>
				<div className='flex'>
					{numberOfStars(rate).map((star)=> star)}
				</div>
			</div>
			<div>
				<p className='text-sm/7 text-gray-300 mt-3'>{content}</p>
			</div>
		</div>
  );
}

export default Card