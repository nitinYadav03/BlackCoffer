import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { VideoView, useVideoPlayer } from "expo-video";

const DiscoveryCard = ({ item }) => {
  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;
    player.muted = true;
  });

  return (
    <View style={styles.card}>
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.locationViews}>
            {item.location} | {item.views} Views
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <View style={styles.actionRow}>
          <FontAwesome name="heart" size={22} color="#666" />
          <Feather
            name="share-2"
            size={20}
            color="#666"
            style={{ marginLeft: 20 }}
          />
          <FontAwesome5
            name="comment"
            size={20}
            color="#666"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  video: {
    height: 200,
    backgroundColor: "#000",
  },
  content: {
    padding: 12,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "#666",
  },
  locationViews: {
    fontSize: 12,
    color: "#666",
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 12,
    color: "#333",
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: "row",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
});

export default DiscoveryCard;
