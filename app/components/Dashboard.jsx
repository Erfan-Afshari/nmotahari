'use client'
import { useRouter } from "next/navigation"
import { useCookies } from "react-cookie"
import { Vazir } from "../utils/fonts";

const Dashboard = () => {
	const router = useRouter();
	const [cookie, setCookie] = useCookies(["user-profile"])

	if (!cookie["user-profile"]) {
		router.push('/signin')
	}
  return (
	<div>
		<div className="h-[30vh]">
			<p className={`${Vazir.className} ${"text-center mt-12"}`}>خوش آمدی {cookie["user-profile"].name}</p>
		</div> 
	</div>
  )
}

export default Dashboard
