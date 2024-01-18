import Image from 'next/image';
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

const TheNews = async ({ id }) => {
	const news = await fetchNews();
	const TheNew = await news.filter((thenew) => thenew.id === id);
  return (
	<div className='container mx-auto rtl-direction pt-8 pb-20'>
		{
			TheNew.map((thisnew) => (
				<div className='grid grid-cols-12 mt-5'>
					<div className='col-span-8 me-16'>
						<h1 className='lalezar text-4xl'>{thisnew.title}</h1>
						<p className='iran-sans mt-3 text-justify leading-6'>{thisnew.description}</p>
					</div>
					<div className='col-span-4 mt-16'>
						<div className='w-10/12 h-auto rounded-xl overflow-hidden'>
							<Image className='w-full h-full object-contain' src={thisnew.thumbnail} width={500} height={500} alt='The News Image' />
						</div>
					</div>
				</div>
			))
		}
	</div>
  )
}

export default TheNews
