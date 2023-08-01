import { useQuery } from '@tanstack/react-query';
import { createContext } from 'react';
import { Pokemon } from '../types/pokemon';
import { loadPokemons } from '../services/pokemon';

interface DataContextI {
    data: Pokemon[]
    isLoading: boolean
    isError: boolean
  }

export const DataContext = createContext<DataContextI | undefined>(undefined);

export function DataProvider({ children }: {children: JSX.Element}) {
    const {
        data,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => loadPokemons(),
    })

    
    return (
      <DataContext.Provider value={{data, isError, isLoading}}>
        { children }
      </DataContext.Provider>
    )
  }