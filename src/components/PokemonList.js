import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemon }) {
  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentConteiner}
    />
  );
}

const styles = StyleSheet.create({
  FlatListContentConteiner: {
    paddinfHorizontal: 5,
  },
});
