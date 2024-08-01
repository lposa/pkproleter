import type { PropsWithChildren, ReactElement } from "react";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

const HEADER_HEIGHT = 150;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerText: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerText,
  headerBackgroundColor,
}: Props): JSX.Element {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  // @ts-expect-error we don't care
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1],
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          {headerText}
          {headerImage}
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  content: {
    alignItems: "center",
    flex: 1,
    gap: 16,
    justifyContent: "center",
    overflow: "hidden",
    padding: 32,
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    height: 120,
    justifyContent: "space-between",
    marginTop: 5,
    overflow: "hidden",
    padding: 20,
    position: "relative",
    width: "100%",
  },
});
