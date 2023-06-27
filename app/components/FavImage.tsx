import { HeartIcon } from '@heroicons/react/24/solid';

type ImageProps = {
    img: string;
    index: number;
  }
  
const FavImage = ({img,index} : ImageProps) => {
    return  (
      <div className='relative'>
        <img className='w-[200px] h-[200px] object-cover' key={index} src={img} />
        <HeartIcon className='w-5 absolute bottom-3 right-3 cursor-pointer' />
      </div>
    )
  }
  export default FavImage