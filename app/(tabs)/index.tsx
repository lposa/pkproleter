import { Image, StyleSheet } from "react-native";

import { NewsBubble } from "@/components/NewsBubble";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen(): JSX.Element {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#fff", dark: "#1D3D47" }}
      headerText={
        <ThemedText style={styles.headerText}>
          Plivacki Klub Proleter
        </ThemedText>
      }
      headerImage={
        <Image
          source={require("@/assets/images/proleter_logo.png")}
          style={styles.logo}
        />
      }
    >
      <NewsBubble />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
  },
  logo: {
    bottom: 0,
    height: 75,
    resizeMode: "contain",
    width: 75,
  },
});
