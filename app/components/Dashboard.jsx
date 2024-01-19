'use client'
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"
import { Vazir } from "../utils/fonts";

const Dashboard = () => {
	const router = useRouter();
	const [cookie, setCookie] = useCookies(["user-profile"])

	if (router.isFallback) {
		<h1>Data is loading</h1>;
	}

  return (
	<div>
		{cookie["user-profile"] ?
			<div className="h-[30vh]">
			  {/* <p className={`${Vazir.className} ${"text-center mt-12"}`}>خوش آمدی {cookie["user-profile"].name}</p> */}
			</div> 
		: router.push('/signin')}
	</div>
  )
}

export default Dashboard
