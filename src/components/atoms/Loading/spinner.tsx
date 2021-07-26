import React from "react";
import { ActivityIndicator } from "react-native";
import { theme } from "@app/styles";

export const Spinner: React.FC = () => {
  return <ActivityIndicator size="large" color={theme.colors.primary} />;
};
