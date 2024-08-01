import { Image, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { ProfileImagePlaceholder } from "@/components/SVGElements";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export const NewsBubble = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ThemedText>01.08.2024.</ThemedText>
      <View style={styles.newsPosterContainer}>
        <ThemedText>Jocke</ThemedText>
        <ProfileImagePlaceholder />
      </View>

      <ThemedText style={styles.newsBubbleText}>
        Danas nema treninga, zbog radova na bazenu
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    elevation: 13,
    flex: 1,
    height: 200,

    padding: 10,
    shadowColor: Colors.light.shadow,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    width: wp("90%"),
  },
  newsBubbleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newsPosterContainer: {
    alignItems: "center",
    bottom: 10,
    columnGap: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    right: 10,
  },
});
