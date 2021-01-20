import React from "react";
import { View } from "react-native";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";

import { styles } from "./styles";

const TermsAndServScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Terms and Services",
    },
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <Separator />
      <View style={styles.subContainer}>
        <View style={styles.paragContainer}>
          <BaseText style={styles.paragHeader}>Lorem, ipsum.</BaseText>
          <BaseText style={styles.paragBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, reiciendis enim maxime a
            perspiciatis. Ut, deserunt totam.
          </BaseText>
        </View>

        <View style={styles.paragContainer}>
          <BaseText style={styles.paragHeader}>Lorem, ipsum.</BaseText>
          <BaseText style={styles.paragBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minus labore facere, reiciendis enim maxime a perspiciatis. Ut,
            deserunt totam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae minus labore facere, reiciendis enim maxime a
            perspiciatis. Ut, deserunt totam.
          </BaseText>
        </View>
      </View>
    </Screen>
  );
};

export default TermsAndServScreen;
