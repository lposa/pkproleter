import { Image, StyleSheet } from "react-native";

import { NewsBubble } from "@/components/NewsBubble";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";

const mockNewsData: Array<{
  id: number;
  date: string;
  text: string;
  poster: string;
  image: string | undefined;
}> = [
  {
    id: 0,
    date: "01.08.2024",
    text: "Danas nema treninga, zbog radova na bazenu",
    poster: "Jocke",
    image: undefined,
  },
  {
    id: 1,
    date: "01.08.2024",
    text: "Danas nema treninga, Somi je slucajno dosao.",
    poster: "Somi",
    image: undefined,
  },
  {
    id: 2,
    date: "01.08.2024",
    text: "Danas nema treninga, hemicarka Goca je ubacila lose hemikalije u bazen",
    poster: "Irena",
    image: undefined,
  },
  {
    id: 3,
    date: "01.08.2024",
    text: "Danas nema treninga, Irena je ljuta.",
    poster: "Irena",
    image: undefined,
  },
];

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
      {mockNewsData.map((item) => {
        return (
          <NewsBubble
            key={item.id}
            date={item.date}
            poster={item.poster}
            text={item.text}
            image={item.image}
          />
        );
      })}
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
