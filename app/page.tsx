'use client';
import { HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { FormEvent, useRef, useState } from 'react';
import FavImage from './components/FavImage';


export default function Home() {
  const searchQuery = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(searchQuery.current!.value === ''){
      return;
    }

    const query = searchQuery.current!.value.toLowerCase()
    const res = await fetch(`https://dog.ceo/api/breed/${query}/images/random/9`);

    if (res.ok){
      const data = await res.json();
      setImages(data.message);
    } else{
      alert('That breed doesn\'t exists')
    }
    searchQuery.current!.value = '';
  };

 
  return (
    <main className='flex justify-center items-center pt-8'>
      <div className='max-w-[700px] w-full'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Dog Breeds</h1>
          <HeartIcon className='text-red-500 w-5' />
        </div>
        <form className='flex w-full h-9 my-10' onSubmit={handleSubmit}>
          <input ref={searchQuery} className='w-full px-4 text-black outline-none border-none' type='search' placeholder='Akita, Beagle, Basenji, Boxer, Collie, Corgi...' />
          <button className='flex gap-1 justify-center items-center px-4 bg-blue-600'>
            <MagnifyingGlassIcon className='w-5 ' />
            Search
          </button>
        </form>
        <section className='grid place-items-center grid-cols-3 my-10 gap-y-8'>
          {images?.map((img, index) => {
            return <FavImage img={img} index={index}></FavImage>
          })}
        </section>

        <hr />

        <section>
          <div className='flex gap-4 my-10'>  
            <HeartIcon className='text-red-500 w-5' /> 
            <h2 className='text-2xl font-bold'>Favorites</h2>
          </div>
        </section>
      </div>
    </main>
  );
}
