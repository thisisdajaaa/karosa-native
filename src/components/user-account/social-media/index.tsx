import React from "react";
import { View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "../../atoms/base-screen";
import { MultiList } from "../../atoms/multi-list";
import { Props as MultiListProps } from "../../atoms/multi-list/types";
import { Props as ScreenProps } from "../../atoms/base-screen/types";

import { styles } from "./styles";

const SocialMedia: React.FC = () => {
  const { goBack } = useNavigation();

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Social Media Accounts",
      press: {
        left: () => goBack(),
      },
    },
    customStyles: styles.container,
  };

  const multiListProps: MultiListProps = {
    multiAction: [
      {
        text: {
          left: "Facebook",
          right: "LINK",
        },
        IconComponent: (
          <AntDesign
            name="facebook-square"
            size={24}
            style={styles.logo}
            color="#3C579B"
          />
        ),
        action: () => console.log("Fb link"),
        style: {
          textStyle: {
            right: {
              color: "#0AA351",
            },
            left: {
              position: "absolute",
              left: 34,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Instagram",
          right: "LINK",
        },
        image: require("../../../../assets/insta.png"),
        action: () => console.log("Insta link"),
        style: {
          textStyle: {
            right: {
              color: "#0AA351",
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Twitter",
          right: "LINK",
        },
        IconComponent: (
          <FontAwesome
            name="twitter-square"
            style={styles.logo}
            size={24}
            color="#1DA1F2"
          />
        ),
        action: () => console.log("Twitter link"),
        style: {
          textStyle: {
            right: {
              color: "#0AA351",
            },
            left: {
              position: "absolute",
              left: 34,
            },
          },
        },
        hasSeparator: true,
      },
    ],
  };

  return (
    <Screen {...screenProps}>
      <View style={styles.multiListContainer}>
        <MultiList {...multiListProps} />
      </View>
    </Screen>
  );
};

export default SocialMedia;
