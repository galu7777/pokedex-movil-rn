import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'

import ImageColors from 'react-native-image-colors'

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const windowsWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();
  

  useEffect(() => {
    
    ImageColors.getColors( pokemon.picture, { fallback: 'grey' })
        .then( colors => {

            if ( !isMounted.current ) return;

            ( colors.platform === 'android' )
                ? setBgColor(colors.dominant || 'grey' )
                : setBgColor(colors.background || 'grey' )

        })

        return () => {
            isMounted.current = false
        }

  }, [])
  

  return (
    <TouchableOpacity
        activeOpacity={ 0.8 }
        onPress={ 
            () => navigation.navigate('PokeScreen', { 
                simplePokemon: pokemon,
                color: bgColor 
            }) 
        }
    >
        <View style={{
            ...styles.cardContainer,
            width: windowsWidth * 0.4,
            backgroundColor: bgColor
        }}>

            {/*Nombre del Pokemon*/}
            <View>
                <Text 
                    style={ styles.name }
                >
                    { pokemon.name }
                    { '\n#' + pokemon.id }
                </Text>

                <View style={ styles.pokebolacontainer }>
                    <Image
                        source={ require('../assets/pokebola-blanca.png') }
                        style={ styles.pokebola }
                    />
                </View>

                <FadeInImage
                    uri={ pokemon.picture }
                    style={ styles.pokemonImage }
                />

            </View>
            
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        //backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,     
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25        
    },
    pokemonImage: {
        width: 90,
        height: 90,
        position: 'absolute',
        right: -5,
        bottom: -35
    },
    pokebolacontainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -70,
        right: 1,
        overflow: 'hidden',
        opacity: 0.5
    }
})