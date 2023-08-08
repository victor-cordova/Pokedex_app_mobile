import type { CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Pokemon } from './pokemon';

interface PokemonProps {
    id: number,
}

export type RootStackParamList = {
    PokedexNavigation: NavigatorScreenParams<PokedexStackParamList>;
    FavoriteNavigation: NavigatorScreenParams<PokedexStackParamList>;
    Account: undefined;
};

export type PokemonsStackParamList = {
    Pokemons: NavigatorScreenParams<PokemonTabParamList>;
    Pokemon: PokemonProps;
};

export type PokemonTabParamList = {
    Pokemon: PokemonProps;
}


export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

export type PokedexStackScreenProps<T extends keyof PokemonsStackParamList> = StackScreenProps<PokemonsStackParamList, T>;

export type FavoriteStackScreenProps<T extends keyof PokemonsStackParamList> = StackScreenProps<PokemonsStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

  
// export type RootStackParamList = {
//     Home: NavigatorScreenParams<HomeTabParamList>;
//     Settings: undefined;
// };

  
// export type HomeTabParamList = {
//     Popular: undefined;
//     Latest: undefined;
// };
  
// export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<BottomTabScreenProps<HomeTabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;