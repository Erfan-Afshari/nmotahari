'use client'
import { useRouter } from 'next/navigation';
import Dashboard from '@/app/components/Dashboard';

const page = () => {
	const router = useRouter();
	if (router.isFallback) {
		<h1>Data is loading</h1>;
	}
  return (
	<div>
		<Dashboard /> 
	</div>
  )
}

export default page
