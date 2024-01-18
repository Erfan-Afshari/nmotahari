import Link from 'next/link'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import Image from 'next/image'
import Shadlogo from '@/app/img/shadlogo.svg'
import Eitalogo from '@/app/img/eitalogo.svg'

const Footer = () => {
  return (
	<section class="bg-indigo-950 rtl-direction mt-auto">	
		<div class="container py-8 mx-auto iran-sans">
			<div className='flex w-full md:justify-start justify-center md:gap-10 gap-0 text-md'>
				<Link href='/' className='text-white md:text-md text-sm hover:text-orange-500 duration-150 md:px-6 px-4 py-2'>خانه</Link>
				<Link href='/researches' className='text-white md:text-md text-sm hover:text-orange-500 duration-150 md:px-6 px-4 py-2'>پژوهش ها</Link>
				<Link href='/aboutus' className='text-white md:text-md text-sm hover:text-orange-500 duration-150 md:px-6 px-4 py-2'>درباره ما</Link>
				<Link href='/contactus' className='text-white md:text-md text-sm hover:text-orange-500 duration-150 md:px-6 px-4 py-2'>تماس با ما</Link>
			</div>
			<div class="grid grid-cols-12 md:gap-12">
				<div className='flex flex-col md:col-span-8 col-span-12'>
					<div className='mt-4'>
						<h1 className='text-white text-2xl lalezar mb-2'>درباره مدرسه</h1>
						<p className='text-white text-sm leading-6 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
					</div>
				</div>
				<div className='md:col-span-4 col-span-12 pt-4'>
					<div>
						<h1 className='flex text-white text-2xl lalezar mb-2'><HiOutlineLocationMarker className='text-white text-3xl' /> نشانی:</h1>
						<p className='text-white text-sm leading-6 text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
					</div>
				</div>
			</div>
			<div className='mt-6'>
				<div>
					<h1 className='text-white text-2xl lalezar mb-2'>ما را در فضای مجازی دنبال کنید</h1>
				</div>
				<div className='flex mt-2 md:ms-0 ms-4'>
					<Link href='/'><div className='hover:border-green-500 hover:bg-green-500 p-2 border-2 border-white rounded-xl duration-150 me-4'><Image src={Shadlogo} width={25} height={25} alt='Shad Logo'></Image></div></Link>
					<Link href='/'><div className='hover:border-orange-500 hover:bg-orange-500 p-1 border-2 border-white rounded-xl duration-150'><Image src={Eitalogo} width={33} height={33} alt='Eita Logo'></Image></div></Link>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Footer
