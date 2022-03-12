/**
 *
 * UserAccountMain
 * @format
 *
 */

import React, { FC } from "react";

import { ScrollView } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ActionPhase from "./ActionPhase";
import Choices from "./Choices";

const UserAccountMainTemplate: FC = () => {
  return (
    <ScrollView>
      <ProfileHeader />
      <ActionPhase />
      <Choices />
    </ScrollView>
  );
};

export default UserAccountMainTemplate;
