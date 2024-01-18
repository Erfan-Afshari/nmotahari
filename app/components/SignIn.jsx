'use client'
import Link from "next/link"


const SignIn = () => {
	return (
	<div className='flex justify-center items-center w-[100vw] h-[80vh] rtl-direction'>
		<div className='md:w-[450px] w-[340px] h-[300px] shadow-md rounded-2xl'>
			<div className="signin-form flex flex-col space-y-3 items-center p-6">
				<h1 className="lalezar text-3xl mb-6">ورود به سیستم</h1>
				<input className="w-full iran-sans bg-gray-100 rounded-lg text-lg py-2 px-3" type="text" placeholder="نام کاربری" />
				<input className="w-full iran-sans bg-gray-100 rounded-lg text-lg py-2 px-3" type="password" placeholder="رمز عبور" />
				<Link className="w-full iran-sans" href='/signin'><button className='hover:bg-orange-600 text-white rounded-lg bg-orange-500 py-2 w-full duration-150'>ورود</button></Link>
			</div>
		</div>
	</div>
  )
}

export default SignIn
