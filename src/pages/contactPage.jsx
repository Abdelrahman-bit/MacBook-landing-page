import Button from "../components/Button"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollToTop from "../router/ScrolToTop";

function ContactPage() {
  return (
		<>
			<ScrollToTop />
			<Header isContactPage={true} />
			<div className='pt-25 pb-10 px-15 bg-[#0e0e0e] text-gray-100 flex flex-col lg:flex-row justify-between'>
				<div className='flex flex-col gap-5'>
					<h1 className='text-5xl md:text-6xl lg:text-7xl'> Have a questioin? </h1>
					<p className='max-w-md leading-8'>
						We'e here to help! Fill out the form or reach us via emial or phone. Our Customer care Team is available
						to help you get the best experience out of MacBook Air Whether you have an issu about your order or
						looking for helpful guaid
					</p>
					<p className='max-w-md'>
						Every one gets a personalized response, so please allow 24 hours during business hours for a reply. Our
						business hours are M-F from 9am to 5pm PT
					</p>
				</div>
				<div className=' lg:w-5/10'>
					<form
						action=''
						className='flex flex-col gap-8 [&_input]:border-1 [&_input]:border-gray-200 [&_input]:p-3 pt-5 '
					>
						<div className='flex gap-3 flex-wrap'>
							<input className='flex-1' type='text' name='first-name' placeholder='*First Name' />
							<input className='flex-1' type='text' name='first-name' placeholder='*Last Name' />
						</div>
						<input type='email' placeholder='*Email' />
						<input type='text' placeholder='Phone Number (optional)' />
						<input type='text' placeholder='Order Number (optional)' />
						<textarea
							className='p-2 border-1 border-gray-100'
							name='message'
							placeholder='*Massage'
							rows='5'
						></textarea>
						<Button value='SUBMIT' className='p-4' />
					</form>
				</div>
			</div>
			<Footer />
		</>
  );
}

export default ContactPage