import { ProductTabs } from "@app/navigators/tab-navigator";
import React from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Tab } from "react-native-elements";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";

const HEADER_HEIGHT = 200;

const DATA = [
  {
    id: 1,
    title: "The Hunger Games",
  },
  {
    id: 2,
    title: "Harry Potter and the Order of the Phoenix",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
  },
  {
    id: 5,
    title: "Twilight",
  },
  {
    id: 6,
    title: "The Book Thief",
  },
  {
    id: 7,
    title: "The Chronicles of Narnia",
  },
  {
    id: 8,
    title: "Animal Farm",
  },
  {
    id: 9,
    title: "Gone with the Wind",
  },
  {
    id: 10,
    title: "The Shadow of the Wind",
  },
  {
    id: 11,
    title: "The Fault in Our Stars",
  },
  {
    id: 12,
    title: "The Hitchhiker's Guide to the Galaxy",
  },
  {
    id: 13,
    title: "The Giving Tree",
  },
  {
    id: 14,
    title: "Wuthering Heights",
  },
  {
    id: 15,
    title: "The Da Vinci Code",
  },
];
const Home = () => {
  const insets = useSafeAreaInsets();
  const offset = React.useRef(new Animated.Value(0)).current;
  const headerY = Animated.multiply(
    Animated.diffClamp(offset, 0, HEADER_HEIGHT),
    -1
  );
  const tabY = Animated.add(offset, headerY);

  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });

  Animated.add;

  return (
    <>
      {Platform.OS === "ios" && (
        <View
          style={{
            backgroundColor: "lightblue",
            height: 20,
            width: "100%",
            position: "absolute",
            zIndex: 2,
          }}
        />
      )}
      <Animated.View
        style={{
          width: "100%",
          position: "absolute",
          transform: [
            {
              translateY: headerY,
            },
          ],
          elevation: 0,
          flex: 1,
          zIndex: 1,
          backgroundColor: "lightblue",
        }}
      />
      <Animated.ScrollView
        scrollEventThrottle={1}
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{ zIndex: 0, height: "100%", elevation: -1 }}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: true }
        )}
        overScrollMode="never">
        <Tab
          style={{
            transform: [{ translateY: tabY }],
            zIndex: 1,
            width: "100%",
          }}>
          <Tab.Item title="Recent" />
          <Tab.Item title="favourite" />
          <Tab.Item title="cart" />
        </Tab>
      </Animated.ScrollView>
    </>
  );
};

export default Home;
