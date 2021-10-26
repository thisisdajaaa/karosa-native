/**
 *
 * Tracker
 * @format
 *
 */

import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";

// import TrackerConfig from "./config";
import type { PropsType } from "./types";
import { styles } from "./styles";
import { View } from "react-native";
import Text from "@app/atoms/Text";
import Header from "@app/components/molecules/Header";
import { theme } from "@app/styles";
import Icons from "@app/atoms/Icon";
import Timeline from "@app/components/molecules/Timeline";
import { timelineProps } from "@app/components/molecules/Timeline/types";

const Tracker: FC<PropsType> = (props) => {
  const { goBack } = useNavigation();

  const data: timelineProps = {
    data: [
      { date: "22 Oct 11:25", description: "Parcel has been delivered" },
      { date: "22 Oct 11:11", description: "Parcel has been confirmed" },
      { date: "25 Oct 01:11", description: "test" },
    ],
  };

  return (
    <React.Fragment>
      <Header
        centerComponent={
          <Text text="Completed" textStyle={styles.headerTextStyle} />
        }
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
      />

      <View style={[styles.container, styles.flexDirectionRow]}>
        <Icons
          group="orderFullFillment"
          name="deliveryCompleted"
          width={42}
          height={42}
        />
        <View style={styles.deliveryTextContainer}>
          <View style={[styles.deliveryText, styles.flexDirectionRow]}>
            <Text text="Delivered on " />
            <Text text="3 June 2021" textStyle={styles.deliveryHighlight} />
          </View>
          <Text
            text="Delivered by Lalamove"
            textStyle={styles.deliverySecondary}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={[styles.flexDirectionRow, styles.trackingHeader]}>
          <Text text="Tracking Number" />
          <View style={styles.flexDirectionRow}>
            <Text text="12345678910" />
            <Icons
              group="orderFullFillment"
              name="iconCopy"
              width={15}
              height={15}
            />
          </View>
        </View>
        <Timeline {...data} />
      </View>
    </React.Fragment>
  );
};

export default Tracker;
