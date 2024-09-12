'use client'
import Image from 'next/image'
import SchoolElement from '@/app/img/schoolElement.svg'
import { Vazir, lalezar } from '@/app/utils/fonts'
import { HiOutlineBeaker } from 'react-icons/hi'
import { PiPaintBrush } from 'react-icons/pi'
import { MdOutlineSportsTennis } from 'react-icons/md'
import { BsPersonVideo3 } from 'react-icons/bs'

const Home = () => {
	const scrollToSubjects = () => {
		let subjectSection = document.getElementById('subjects')
		subjectSection.scrollIntoView({ behavior: "smooth", block: "start" });
	}

  return (
	<div className='w-full h-full'>
		<section id='hero'>
			<div className='container mx-auto 2xl:mb-12 xl:mb-28 mb-10'>
				<div className='flex md:flex-row flex-col-reverse items-center justify-between md:mt-12 pb-6 mt-8 text-left rtl-direction'>
					<div className={`${lalezar.className} ${'flex flex-col md:w-6/12 w-11/12 justify-center md:items-start items-center md:me-10 me-0'}`}>
						<div className='flex flex-col justify-center md:items-start items-center'>
							<h1 className='lg:text-3xl md:text-2xl text-3xl'>مدرسه نمونه دولتی</h1>
							<h1 className='lg:text-8xl md:text-6xl text-7xl text-orange-500'>تبریزی</h1>
						</div>
						<span className='md:w-[40px] md:h-[8px] w-[200px] h-[3px] bg-slate-800 rounded-md my-3'></span>
						<div className={`${Vazir.className} ${'xl:w-8/12 md:w-9/12 w-full text-start'}`}>
							<p className='xl:text-lg lg:text-md md:text-sm text-sm md:text-start text-center'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
								و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
							</p>
						</div>
						<div className={`${Vazir.className} ${'md:w-auto w-full mt-3'}`}>
							<button className='hover:bg-orange-600 bg-orange-500 text-white md:rounded-xl rounded-full lg:px-8 lg:py-3 md:px-6 md:py-2 py-3 md:w-auto w-full xl:text-lg lg:text-md md:text-sm duration-150' onClick={scrollToSubjects}>بزن بریم !</button>
						</div>
					</div>
					<div className='flex items-center justify-center lg:w-6/12 md:w-8/12 h-full'>
						<Image className='h-fit lg:w-11/12 md:w-full' src={SchoolElement} alt='picture' />
					</div>
				</div>
			</div>
		</section>
		<section id='subjects' className='bg-BrightGraySupLight rtl-direction'>
			<div className='relative flex flex-col container mx-auto w-full pb-32'>
				<div className='flex w-full justify-center mb-8 pt-24'>
					<h1 className={`${lalezar.className} ${'lg:text-5xl text-4xl me-2'}`}>زمینه های</h1>
					<h1 className={`${lalezar.className} ${'lg:text-5xl text-4xl text-orange-500'}`}>فعالیت</h1>
				</div>
				<div className={`${Vazir.className} ${"lg:mt-6 md:mt-2 mx-auto grid md:grid-cols-12 grid-cols-1 gap-5 w-full"}`}>
					<div className="flex flex-col md:justify-start md:items-start items-center justify-center md:p-6 p-9 bg-white rounded-md w-full shadow-3xl hover:shadow-lg duration-300 col-span-6">
						<HiOutlineBeaker className='text-5xl text-orange-500'/>
						<p className="lg:text-lg text-xl lg:mt-4 md:text-sm mt-4 font-bold">علمی و پژوهشی</p>
						<p className="lg:text-sm md:text-xs text-sm text-Gray md:mt-1 font-semibold mt-3 md:text-start text-center me-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
						و با استفاده از طراحان گرافیک است</p>
					</div>
					<div className="flex flex-col md:justify-start md:items-start items-center justify-center lg:p-9 md:p-6 bg-white rounded-md p-9 w-full shadow-3xl hover:shadow-lg duration-300 col-span-6">
						<PiPaintBrush className='text-5xl text-blue-500'/>
						<p className="lg:text-lg text-xl lg:mt-4 md:text-sm mt-4 font-bold">فرهنگی و هنری</p>
						<p className="lg:text-sm md:text-xs text-sm text-Gray md:mt-1 font-semibold mt-3 md:text-start text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
						و با استفاده از طراحان گرافیک است</p>
					</div>
					<div className="flex flex-col md:justify-start md:items-start items-center justify-center lg:p-9 md:p-6 p-9 bg-white rounded-md w-full shadow-3xl hover:shadow-lg duration-300 col-span-6">
						<MdOutlineSportsTennis className='text-5xl text-green-500'/>
						<p className="lg:text-lg text-xl lg:mt-4 md:text-sm mt-4 font-bold">ورزشی</p>
						<p className="lg:text-sm md:text-xs text-sm text-Gray md:mt-1 font-semibold mt-3 md:text-start text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
					</div>
					<div className="flex flex-col md:justify-start md:items-start items-center justify-center lg:p-9 md:p-6 bg-white rounded-md p-9 w-full shadow-3xl hover:shadow-lg duration-300 col-span-6">
						<BsPersonVideo3 className='text-5xl text-yellow-500'/>
						<p className="lg:text-lg text-xl lg:mt-4 md:text-sm mt-4 font-bold">مشاوره</p>
						<p className="lg:text-sm md:text-xs text-sm text-Gray md:mt-1 font-semibold mt-3 md:text-start text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
					</div>
				</div>	
			</div>
		</section>
	</div>
  )
}

export default Home
