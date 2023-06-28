'use client'
import { ReactNode, createContext, useState } from 'react';

type FavContextType = {
  favorites: string[];
  updateFavorites: (img: string) => void
};

export const FavContext = createContext<FavContextType>({} as FavContextType);

export const FavContextProvider = ( {children} : {children: ReactNode}) => {
  const [favorites, setFavorites] = useState<string[]>([])

  const updateFavorites = (img : string) => {
    if (favorites.includes(img)) {
        let updatedArray = favorites.filter((fav) => fav !== img)
        setFavorites(updatedArray);
    } else{
        setFavorites([...favorites, img])
    }
  };

  return (
    <FavContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavContext.Provider>
  );
};