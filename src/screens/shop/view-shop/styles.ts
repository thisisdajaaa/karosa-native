import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

import { ActiveLink } from "./types";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  dropdownIconContainer: {
    position: "absolute",
    left: 40,
    top: 3,
  },
  voucherContainer: {
    height: 140,
  },
  chevronIcon: {
    fontSize: 28,
    color: "#0AA351",
  },
  txtChevronInfo: {
    ...theme.textRegular,
    color: theme.colors.primary,
    fontWeight: "400",
    position: "absolute",
    right: 45,
    marginLeft: 20,
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  primaryPadding: {
    paddingLeft: 24,
  },
  secondaryPadding: {
    paddingLeft: 31,
  },
  categoryContainer: {
    marginTop: 25,
  },
});

export const linkLabels = (activeLink: ActiveLink, currLink: ActiveLink) => {
  return StyleSheet.create({
    txtLink: {
      ...theme.textRegular,
      fontWeight: "400",
      color:
        activeLink === currLink ? theme.colors.primary : theme.colors.dark10,
    },
  });
};

export const dropdownStyle = (activeLink: ActiveLink, sortAsc: boolean) => {
  return StyleSheet.create({
    dropdownIcon: {
      fontSize: 15,
      color:
        activeLink === "Price" ? theme.colors.primary : theme.colors.dark35,
      transform: [
        { rotate: sortAsc && activeLink === "Price" ? "180deg" : "0deg" },
      ],
    },
  });
};
