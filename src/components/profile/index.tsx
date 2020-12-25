import React from "react";
import { ImageBackground, StatusBar, View, Image } from "react-native";
import { Header } from "react-native-elements";
import { AppButton } from "@app/components/button";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { BaseText } from "@app/components/base-text";

import { Props } from "./types";
import { styles } from "./styles";

export const Profile: React.FC<Props> = ({
  details,
  CenterComponent,
  RightComponent,
}) => {
  return (
    <React.Fragment>
      <ImageBackground
        style={styles.coverPhoto}
        blurRadius={1}
        source={details.coverPhoto}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <Header
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
          }}
          leftComponent={{
            icon: "arrow-back",
            color: "white",
          }}
          centerComponent={CenterComponent}
          rightComponent={RightComponent}
        />
      </ImageBackground>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatarPhoto} source={details.avatarPhoto} />
      </View>
      <View style={styles.profileInfoContainer}>
        <AppButton
          icon={{
            left: <MaterialIcons name="chat" style={styles.chatIcon} />,
          }}
          textStyle={styles.txtChat}
          containerStyle={styles.btnChat}
          title={"Chat"}
        />
        <AppButton
          icon={{
            left: <Ionicons name="md-person-add" style={styles.personIcon} />,
          }}
          textStyle={styles.txtPerson}
          containerStyle={styles.btnPerson}
          title={"Follow"}
        />
        <View style={styles.shopNameContainer}>
          <BaseText style={styles.txtShopName}>{details.shopName}</BaseText>
        </View>
        <View style={styles.shopAddrContainer}>
          <BaseText style={styles.txtShopAddr}>{details.shopAddr}</BaseText>
          <View style={styles.activeContainer}>
            {details.isActive ? (
              <React.Fragment>
                <View style={styles.activeIcon} />
                <BaseText style={styles.txtIcon}>Active</BaseText>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <View style={styles.inactiveIcon} />
                <BaseText style={styles.txtIcon}>Inactive</BaseText>
              </React.Fragment>
            )}
          </View>
        </View>
        <View style={styles.bottomInfoContainer}>
          <View style={styles.ratingContainer}>
            <BaseText style={styles.txtBottomValue}>
              {details.rating} / 5.0
            </BaseText>

            <BaseText style={styles.txtBottomLabel}>Shop Rating</BaseText>
          </View>

          <View style={styles.followersPerfContainer}>
            <BaseText style={styles.txtBottomValue}>
              {details.followers}
            </BaseText>

            <BaseText style={styles.txtBottomLabel}>Followers</BaseText>
          </View>

          <View style={styles.followersPerfContainer}>
            <BaseText style={styles.txtBottomValue}>
              {details.chatPerf}%
            </BaseText>

            <BaseText style={styles.txtBottomLabel}>Chat Performance</BaseText>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};
