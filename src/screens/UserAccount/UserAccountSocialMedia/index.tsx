import React from "react";
import { View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BaseScreen from "@app/atoms/BaseScreen";
import { MultiList } from "@app/components/organisms/MultiList";
import { Props as MultiListProps } from "@app/components/organisms/MultiList/types";
import { Props as ScreenProps } from "@app/atoms/BaseScreen/types";

import { styles } from "./styles";

const SocialMediaScreen: React.FC = () => {
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
        action: () => console.log("Fb link"),
        text: {
          left: "Facebook",
          right: "LINK",
        },
        icon: {
          left: <AntDesign name="facebook-square" style={styles.fbLogo} />,
        },
        style: {
          textStyle: {
            left: styles.txtLogo,
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
        hasSeparator: true,
      },
      {
        action: () => console.log("Twitter link"),
        text: {
          left: "Twitter",
          right: "LINK",
        },
        icon: {
          left: (
            <FontAwesome name="twitter-square" style={styles.twitterLogo} />
          ),
        },
        style: {
          textStyle: {
            left: styles.txtLogo,
          },
        },
        hasSeparator: true,
      },
    ],
  };

  return (
    <BaseScreen {...screenProps}>
      <View style={styles.multiListContainer}>
        <MultiList {...multiListProps} />
      </View>
    </BaseScreen>
  );
};

export default SocialMediaScreen;
