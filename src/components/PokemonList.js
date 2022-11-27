import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemon, loadPokemon, isNext }) {
  const laoMore = () => {
    loadPokemon();
  };
  return (
    <FlatList
      data={pokemon}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.FlatListContentConteiner}
      onEndReached={isNext && laoMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size={"large"} style={styles.spinner} />
      }
    />
  );
}

const styles = StyleSheet.create({
  FlatListContentConteiner: {
    paddinfHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
    color: "#AEAEAE",
  },
});
