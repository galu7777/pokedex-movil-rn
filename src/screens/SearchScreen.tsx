import React, { useEffect, useState } from 'react'
import { Text, View, Platform,  FlatList, Dimensions } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Loading } from '../components/Loading';

import { PokemonCard } from '../components/POkemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/Apptheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {


  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  const [term, setTerm] = useState('');

  useEffect(() => {

    if ( term.length === 0 ) {
      return setPokemonFiltered([]);
    }

    console.log( isNaN( Number(term)) )

    if ( isNaN( Number(term) ) ) {
      setPokemonFiltered(
        simplePokemonList.filter( 
          (poke) => poke.name.toLocaleLowerCase()
            .includes( term.toLocaleLowerCase() ) 
        )
      );
    } else {
      const pokemonById = simplePokemonList.find((poke) => poke.id === term)
      setPokemonFiltered(
        ( pokemonById ) ? [pokemonById] : []
      )
    }

    
  }, [term])
  

  if ( isFetching ) {
    return <Loading/>
  }

  return (
    <View style={{ 
        flex: 1,
        marginHorizontal: 20
        }}
    >
        <SearchInput
            onDebounce={ (value) => setTerm(value) }
            style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth -40,
                top: ( Platform.OS === 'ios' ) ? top : top + 30
            }}
        />

        <FlatList 
            data={ pokemonFiltered }
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
                color: 'black',
                marginTop: ( Platform.OS === 'ios' ) ? top + 60 : top + 80
              }}>{ term }</Text>
            )}

            renderItem={ ({item}) => (<PokemonCard pokemon={ item }/> )}
        />

    </View>
  )
}

