import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import DiscoveryCard from "../components/DiscoveryCard";
import discoveryData from "../data/discoveryData";

const DiscoveryPage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{ padding: 10 }}>
        {discoveryData.map((item) => (
          <View key={item.id} style={styles.postContainer}>
            {/* Profile section - outside of card */}
            <View style={styles.profileHeader}>
              <Image
                source={{ uri: item.profileImage }}
                style={styles.avatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.userName}>{item.userName}</Text>
              </View>
              <TouchableOpacity style={styles.followBtn}>
                <Text style={styles.followText}>
                  {item.isFollowing ? "Following" : "Follow"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Card content */}
            <DiscoveryCard item={item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  postContainer: {
    marginBottom: 15,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
  followBtn: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  followText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
  },
});

export default DiscoveryPage;
