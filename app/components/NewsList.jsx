import Image from "next/image"
import Link from "next/link"
import {server} from '@/app/api/news/route';

async function fetchNews() {
    const response = await fetch(`${server}/api/news`, { cache: 'no-store' }, {
      next: {
        revalidate: 60 
      }
    });
  
    const news = await response.json();
    return news;
}

const newsList = async () => {
	const news = await fetchNews();

  return (
	<div className='container mx-auto rtl-direction iran-sans pt-10 pb-24'>
		<div className='flex w-full justify-center pb-10'>
			<h1 className='lalezar lg:text-5xl text-4xl me-2'>اخبار روز</h1>
			<h1 className='lalezar lg:text-5xl text-4xl text-orange-500'>مدرسه</h1>
		</div>
		<div className='grid grid-cols-12 gap-5'>
			{news.map((theNew) => (
				<Link href={`/news/${theNew.id}`} className="hover:shadow-md xl:col-span-2 md:col-span-3 sm:col-span-4 col-span-6 w-full shadow-sm rounded-lg overflow-hidden duration-150">
					<div className="w-full h-full flex flex-col">
						<div className="w-full overflow-hidden h-[200px]">
							<Image className="w-full h-full object-cover" src={theNew.thumbnail} width={500} height={500} alt=""></Image>
						</div>
						<div className="p-3">
							<h1 className="font-bold truncate">{theNew.title}</h1>
							<p className="line-clamp-3 h-[75px]">{theNew.description}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	</div>
  )
}

export default newsList
