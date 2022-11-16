import React from 'react'
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ( {pokemon}: Props ) => {
  return (
    <ScrollView
        showsVerticalScrollIndicator={ false }
        style={{
            ...StyleSheet.absoluteFillObject,
        }}
    >
        {/*Types y Pesos*/}
        <View style={{ 
            ...styles.container,
            marginTop: 370 
        }}>
            <Text style={ styles.title }>Type</Text>
              <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map( ({ type }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10,
                                color: 'black'
                            }}
                            key={ type.name }
                        >
                            { type.name }
                        </Text>
                    ))
                }
              </View>

              {/*Peso*/}
              <Text style={ styles.title }>Peso</Text>
              <Text style={{ 
                ...styles.regularText, color: 'black' 
               }}>{ pokemon.weight } kg</Text>

        </View>

        {/*Sprites*/}
        <View style={ styles.container }>
            <Text style={ styles.title }>Sprites</Text>
        </View>

        <ScrollView
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        >
            <FadeInImage
                uri={ pokemon.sprites.front_default }
                style={ styles.basicSprite }
            />

            <FadeInImage
                uri={ pokemon.sprites.back_default }
                style={ styles.basicSprite }
            />

            <FadeInImage
                uri={ pokemon.sprites.front_shiny }
                style={ styles.basicSprite }
            />

            <FadeInImage
                uri={ pokemon.sprites.back_shiny }
                style={ styles.basicSprite }
            />

        </ScrollView>

        {/*Habilidades*/}
        <View style={ styles.container }>
            <Text style={ styles.title }>Movimientos</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10,
                                color: 'black'
                            }}
                            key={ ability.name }
                        >
                            { ability.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/*Habilidades*/}
        <View style={ styles.container }>
            <Text style={ styles.title }>Movimientos</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10,
                                color: 'black'
                            }}
                            key={ move.name }
                        >
                            { move.name }
                        </Text>
                    ))
                }
            </View>
        </View>

        {/*Stats*/}
        <View style={ styles.container }>
            <Text style={ styles.title }>Stats</Text>
            <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View 
                            key={ stat.stat.name + i }
                            style={{ flexDirection: 'row' }}
                        >
                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150,
                                    color: 'black'
                                }}
                                key={ stat.stat.name }
                            >
                                { stat.stat.name }
                            </Text>

                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    marginRight: 10,
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}
                            >
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* Sprites Final */}
            <View style={{
                marginBottom: 50,
                alignItems: 'center'
            }}>
                <FadeInImage
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprite }
                />
            </View>

        </View>

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black'
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        height: 100,
        width: 100
    } 
})