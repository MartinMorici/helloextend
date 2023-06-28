import { FavContext } from '@/context/favoriteContext';
import { HeartIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';

type ImageProps = {
    img: string;
    index: number;
  }
  
const FavImage = ({img,index} : ImageProps) => {
  const {updateFavorites, favorites} = useContext(FavContext)

    return  (
      <div className='relative'>
        <img className='w-[200px] h-[200px] object-cover' key={index} src={img} />
        <HeartIcon className={`w-5 absolute bottom-3 right-3 cursor-pointer ${favorites.includes(img) && 'text-red-500'}`} onClick={() => updateFavorites(img)} />
      </div>
    )
  }
  export default FavImage