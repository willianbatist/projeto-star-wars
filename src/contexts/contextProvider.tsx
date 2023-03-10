'use client'
import React, { createContext, useState } from 'react';
import { ICharacter } from '../types/Characters.types';
import { AppContextInterface, Props } from '../types/Context.types';


export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);
  const [gender, setGender] = useState();
  const [speciesFilter, setSpeciesFilter] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filmFilter, setFilmFilter] = useState();
  const [charactersSearch, setCharactersSearch] = useState();
  const [isLoadingSpecies, setIsLoadingSpecies] = useState(true);
  const [characterId, setCharacterId] = useState();
  const [menuIsVisible, setMenuIsVisible] = useState(false);


  const handleSpecies = (target: any) => {
    const data = { id: target.id, name: target.getAttribute("value") }
    setSpeciesFilter(data)
    setMenuIsVisible(false)
  }


  const context = {
    page,
    setPage,
    gender,
    setGender,
    isLoading,
    setIsLoading,
    speciesFilter,
    setSpeciesFilter,
    handleSpecies,
    filmFilter,
    setFilmFilter,
    charactersSearch,
    setCharactersSearch,
    isLoadingSpecies,
    setIsLoadingSpecies,
    characterId,
    setCharacterId,
    menuIsVisible,
    setMenuIsVisible,
  }
  

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;