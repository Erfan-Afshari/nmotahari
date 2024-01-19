'use client'
import Link from 'next/link';
import { Vazir } from '@/app/utils/fonts';
import { BiHomeAlt2 } from 'react-icons/bi'
import { BsHeadset, BsPerson } from 'react-icons/bs'
import { HiOutlineBeaker } from 'react-icons/hi'
import { RiNewspaperLine } from 'react-icons/ri'
import { useCookies } from "react-cookie"

const navbar = () => {
	const [cookie, setCookie] = useCookies(["user-profile"])
	const toggleHamburgerMenu = (e) => {
		let hamburgerButton = document.getElementById('menu-btn');
		let mobileMenu = document.getElementById('mobile-menu');
		let mobileMenuBody = document.getElementById('mobile-menu-body');
		mobileMenuBody.classList.toggle('w-9/12');
		mobileMenuBody.classList.toggle('w-0');
		mobileMenu.classList.toggle('hamburger-button-toggle');
		hamburgerButton.classList.toggle('open');
	}

	const logout = () => {
		setCookie("user-profile", undefined, {
			path: "/",
			maxAge: -10,
			sameSite: true,
		});
	}
	
  return (
	<nav id='navbar' className='fixed top-0 w-full z-10 bg-white shadow-sm rounded-b-2xl'>
		<div className={`${Vazir.className} ${'w-full rtl-direction py-4'}`}>
			<div className='container mx-auto'>
				<div className='grid grid-cols-12'>
					<div className='lg:flex hidden justify-center col-span-2'>
						{!cookie["user-profile"] ? <Link href='/signin'><button className='hover:text-orange-500 hover:bg-white text-white border-2 border-orange-500 rounded-lg bg-orange-500 px-5 py-2 duration-150'>ورود به سیستم</button></Link> 
						: <Link href='/dashboard'><button className='hover:text-orange-500 hover:bg-white text-white border-2 border-orange-500 rounded-lg bg-orange-500 px-5 py-2 duration-150' onClick={logout}>خروج</button></Link>}
					</div>
					<div className='lg:flex hidden items-center justify-center col-span-8'>
						<Link href='/'><button className='hover:text-orange-500 text-gray-700 px-4 py-1 duration-150'>خانه</button></Link>
						<Link href='/news'><button className='hover:text-orange-500 text-gray-700 px-4 py-1 duration-150'>اخبار</button></Link>
						<Link href='/researches'><button className='hover:text-orange-500 text-gray-700 px-4 py-1 duration-150'>پژوهش ها</button></Link>
						<Link href='/aboutus'><button className='hover:text-orange-500 text-gray-700 px-4 py-1 duration-150'>درباره ما</button></Link>
						<Link href='/contactus'><button className='hover:text-orange-500 text-gray-700 px-4 py-1 duration-150'>تماس باما</button></Link>
					</div>
					<div className='lg:flex hidden justify-center col-span-2'>
					{cookie["user-profile"] ? <Link href='/dashboard'><button className='hover:text-orange-500 hover:bg-white text-white border-2 border-orange-500 rounded-lg bg-orange-500 px-8 py-2 duration-150'>داشبورد</button></Link> 
						: <></>}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className='flex justify-between items-center w-full relative lg:hidden ms-6 rtl-direction'>
				<button id="menu-btn" className="flex items-center lg:hidden hover:bg-gray-100 w-10 h-10 rounded-lg duration-200 z-50" onClick={(e) => toggleHamburgerMenu(e)}>
					<div className="flex flex-col mx-auto space-y-1 hamburger-button">
						<span className="hamburger-top w-5 h-0.5 bg-black rounded-full duration-200"></span>
						<span className="hamburger-middle w-5 h-0.5 bg-black rounded-full duration-200"></span>
						<span className="hamburger-bottom w-5 h-0.5 bg-black rounded-full duration-200"></span>
					</div>
				</button>
			</div>

			<div id='mobile-menu-body' className='fixed top-0 right-0 lg:hidden w-0 h-full bg-white shadow-xl rounded-s-xl duration-300 z-40'>
				<div id="mobile-menu" className="flex flex-col pt-20 p-3 duration-200 hamburger-button-toggle space-y-2">
					<Link href='/' className='hover:bg-orange-100 hover:text-orange-600 flex items-center cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
						<BiHomeAlt2 className='text-xl ms-[2px] me-2' />
						<p className='mt-1'>خانه</p>
					</Link>
					<Link href='/researches' className='hover:bg-orange-100 hover:text-orange-600 flex items-center cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
						<RiNewspaperLine className='text-xl ms-[2px] me-2' />
						<p className='mt-1'>اخبار</p>
					</Link>
					<Link href='/researches' className='hover:bg-orange-100 hover:text-orange-600 flex items-center cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
						<HiOutlineBeaker className='text-xl ms-[2px] me-2' />
						<p className='mt-1'>پژوهش ها</p>
					</Link>
					<Link href='/aboutus' className='hover:bg-orange-100 hover:text-orange-600 flex items-center cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
						<BsPerson className='text-xl ms-[2px] me-2' />
						<p className='mt-1'>درباره ما</p>
					</Link>
					<Link href='/contactus' className='hover:bg-orange-100 hover:text-orange-600 flex items-center cursor-pointer rounded-lg px-6 py-2 duration-100' onClick={toggleHamburgerMenu}>
						<BsHeadset className='text-xl ms-[2px] me-2' />
						<p className='mt-1'>تماس با ما</p>
					</Link>
				</div>
			</div>
		</div>
	</nav>
  )
}

export default navbar
