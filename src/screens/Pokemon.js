import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsapi } from "../api/pokemon";
import Header from "../components/pokemon/Header";
import Stats from "../components/pokemon/Stats";
import Type from "../components/pokemon/Type";
import Favorite from "./Favorite";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon({
  navigation,
  route: {
    params: { id },
  },
}) {
  console.log(navigation);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, id, pokemon]);

  const [pokemon, setPokemon] = useState(null);
  console.log(id);
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsapi(id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [id]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
