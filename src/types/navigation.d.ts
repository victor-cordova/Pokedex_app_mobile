import type { CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Pokemon } from './pokemon';

export type RootStackParamList = {
    PokedexNavigation: undefined;
    Favorite: undefined;
    Account: undefined;
};

export type PokedexTabParamList = {
    Pokemon: undefined;
}
  
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

export type PokedexStackScreenProps<T extends keyof PokedexStackParamList> = StackScreenProps<PokedexStackParamList, T>;

export type PokedexStackParamList = {
    Pokedex: NavigatorScreenParams<PokedexTabParamList>;
    Pokemon: Pokemon;
};
  
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