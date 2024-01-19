'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { server } from "../lib/server"
import { Vazir } from "../utils/fonts"
import { useCookies } from "react-cookie"


const SignIn = () => {
	const router = useRouter()
	const [cookie, setCookie] = useCookies(["user-profile"])

	const fetchUsers = async () => {
		const res = await fetch(`${server}/api/Users/user_profiles`)
		const data = await res.json();
		return data;
	}

	const toggleForm = () => {
		let signinForm = document.getElementById('signin-body');
		let signupForm = document.getElementById('signup-body');
		signinForm.classList.toggle('hidden')
		signupForm.classList.toggle('hidden')
	}

	const addUser = async () => {
		const userEmail = document.getElementById('user-signup-email').value;
		const userPassword = document.getElementById('user-password').value;
		const userName = document.getElementById('user-signup-name').value;
		const userFamily = document.getElementById('user-signup-family').value;
		const emptyError = document.querySelector('.canNotBeEmpty')
		const checkIsAlreadyExist = async () => {
			const users = await fetchUsers();
			let isAlreadyExist = users.some((user) => {
				return userEmail === user.email;
			})
			return isAlreadyExist;
		}
		let isUserAlreadyExist = await checkIsAlreadyExist()
		let userIsAlreadyExistError = document.querySelector('.userIsAlreadyExist')
		if(!isUserAlreadyExist && userEmail !== '' && userPassword !== ''){
			userIsAlreadyExistError.classList.add('hidden');

			fetch(`${server}/api/Users/user_profiles`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify({
					name: userName,
					family: userFamily,
					email: userEmail,
					password: userPassword,
				}),
			})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});

			toggleForm();
		} else if(userEmail == '' || userPassword == '' || userName == '' || userFamily == '') {
			emptyError.classList.remove('hidden');
		} else{
			userIsAlreadyExistError.classList.remove('hidden');
			emptyError.classList.add('hidden');
		}
	}

	const signin = async () => {
		const checkIsCorrectPasswordAndEmail = async () => {
			const userEmail = document.getElementById('user-signin-email').value;
			const userPassword = document.getElementById('user-signin-password').value;
			const users = await fetchUsers();
			let isUserAlreadyExist = users.some((user) => {
				return userEmail === user.email && userPassword === user.password;
			})
			return isUserAlreadyExist;
		}

		let isCorrectPasswordAndEmail = await checkIsCorrectPasswordAndEmail();
		let error = document.querySelector('.userNotFoundError');
		if (isCorrectPasswordAndEmail) {
			error.classList.add('hidden');

			const userEmail = document.getElementById('user-signin-email').value;
			const userPassword = document.getElementById('user-signin-password').value;
			const users = await fetchUsers();
			let userIndex = users.findIndex((user) => {
				return userEmail === user.email;
			})
			const data = JSON.stringify({
				name: users[userIndex].name,
				family: users[userIndex].family,
				email: users[userIndex].email,
				password: users[userIndex].password,
			})

			setCookie("user-profile", data, {
				path: "/",
				maxAge: 3600,
				sameSite: true,
			})

			router.push('/dashboard')

		} else {
			error.classList.remove('hidden');
		}
	}


	return (
		<>{!cookie["user-profile"] ? <div className='flex justify-center items-center py-12 rtl-direction'>
		<div id="signin-body" className='signin-body md:w-[450px] w-[340px] shadow-md rounded-2xl'>
			<div className={`${Vazir.className} ${"signin-form flex flex-col space-y-3 items-center p-6"}`}>
				<h1 className="lalezar text-3xl mb-6">ورود به سیستم</h1>
				<p className="userNotFoundError bg-LightRed text-Red py-2 w-full text-center rounded-md hidden">کاربری با این نام کاربری و رمز عبور یافت نشد</p>
				<input id="user-signin-email" className="w-full  bg-gray-100 rounded-lg text-lg py-2 px-3" type="email" placeholder="ایمیل" />
				<input id="user-signin-password" className="w-full bg-gray-100 rounded-lg text-lg py-2 px-3" type="password" placeholder="رمز عبور" />
				<button className='hover:bg-orange-600 text-white rounded-lg bg-orange-500 py-2 w-full duration-150' onClick={signin}>ورود</button>
				<p className="hover:text-orange-500 hover:no-underline text-sm text-orange-400 underline cursor-pointer duration-150" onClick={toggleForm}>از قبل ثبت نام نکرده اید؟ثبت نام</p>
			</div>
		</div>

		<div id="signup-body" className='signup-body md:w-[450px] w-[340px] shadow-md rounded-2xl hidden'>
			<div className={`${Vazir.className} ${"signin-form flex flex-col space-y-3 items-center p-6"}`}>
				<h1 className="lalezar text-3xl mb-6">ثبت نام</h1>
				<p className="userIsAlreadyExist bg-LightRed text-Red py-2 w-full text-center rounded-md hidden">این نام کاربری از قبل وجود دارد</p>
				<p className="canNotBeEmpty bg-LightRed text-Red py-2 w-full text-center rounded-md hidden">هیچ یک از فیلدها نمی تواند خالی باشد</p>
				<input id="user-signup-name" className="w-full  bg-gray-100 rounded-lg text-lg py-2 px-3" type="text" placeholder="نام" />
				<input id="user-signup-family" className="w-full  bg-gray-100 rounded-lg text-lg py-2 px-3" type="text" placeholder="نام خانوادگی" />
				<input id="user-signup-email" className="w-full  bg-gray-100 rounded-lg text-lg py-2 px-3" type="email" placeholder="ایمیل" />
				<input id="user-password" className="w-full  bg-gray-100 rounded-lg text-lg py-2 px-3" type="password" placeholder="رمز عبور" />
				<Link className="w-full " href='/signin' onClick={addUser}><button className='hover:bg-orange-600 text-white rounded-lg bg-orange-500 py-2 w-full duration-150'>ثبت نام</button></Link>
				<p className="hover:text-orange-500 hover:no-underline text-sm text-orange-400 underline cursor-pointer duration-150" onClick={toggleForm}>قبلا ثبت نام کرده اید؟ورود</p>
			</div>
		</div>
	</div> : router.push('/dashboard')}
	</>
  )
}

export default SignIn
