import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, FlatList, ActivityIndicator, Text, View } from 'react-native';


import { PokeScreen } from './PokeScreen';
import { styles } from '../theme/Apptheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/POkemonCard';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemon } = usePokemonPaginated();
  

  return (
    <>

        <Image
            source={ require('../assets/pokebola.png') }
            style={ styles.pokebolaBG }  
        />


        <View
          style={{ alignItems: 'center' }}>
            
          <FlatList 
            data={ simplePokemonList }
            showsVerticalScrollIndicator={true}
            numColumns={ 2 }
            keyExtractor={ (pokemon) => pokemon.id }

            //Header Components
            ListHeaderComponent={(
              <Text style={{ 
                ...styles.title,
                ...styles.marginGlobal,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
                color: 'black'
              }}>Pokedex</Text>
            )}

            renderItem={ ({item}) => (<PokemonCard pokemon={ item }/> )}

            // Infinity Scroll
            onEndReached={ loadPokemon }
            onEndReachedThreshold={ 0.4 }

            ListFooterComponent={(
              <ActivityIndicator
                style={{ height: 100 }}
                size={20}
                color='grey'
              />
            )}
          />
      </View>

    </>
  )
}

