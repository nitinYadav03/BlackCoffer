import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="menu" size={26} color="#fff" />
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#666"
          style={styles.search}
        />
        <Ionicons
          name="search"
          size={20}
          color="#003B4A"
          style={styles.searchIcon}
          pointerEvents="none"
        />
      </View>
      <TouchableOpacity>
        <FontAwesome6 name="sliders" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003B4A",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  search: {
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 45,
    fontSize: 16,
    color: "#333",
    textAlignVertical: "center", // For Android
    paddingTop: 0, // Reset default padding
    paddingBottom: 0, // Reset default padding
  },
  searchContainer: {
    flex: 1,
    position: "relative",
    marginHorizontal: 9,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    top: 9, // Adjusted to center with the text
    zIndex: 1,
  },
});

export default Header;
