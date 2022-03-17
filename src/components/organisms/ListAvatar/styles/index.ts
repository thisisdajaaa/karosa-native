/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 1,
    paddingRight: 10,
    backgroundColor: theme.colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  imageContainer: {
    shadowColor: theme.colors.shadow,
    shadowOffset: { height: 5, width: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderRadius: 100,
    marginBottom: 9,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 100,
  },
  title: {
    ...theme.textRegular,
    fontWeight: "400",
  },
  subTitle: { fontSize: 16, lineHeight: 19, fontWeight: "300" },
  separator: {
    marginTop: 17,
  },
  activeRateContainer: { flexDirection: "row", position: "absolute", top: 40 },
  followContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  activeCircle: {
    backgroundColor: theme.colors.green10,
    height: 8,
    width: 8,
    borderRadius: 50,
    position: "absolute",
    top: 3,
  },
  inactiveCircle: {
    backgroundColor: theme.colors.dark10,
    height: 8,
    width: 8,
    borderRadius: 50,
    position: "absolute",
    top: 3,
  },
  starIcon: {
    position: "absolute",
    left: 57,
    top: 2,
    fontSize: 10,
    color: theme.colors.gold10,
  },
  txtActive: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "300",
    position: "absolute",
    left: 12,
  },
  rateText: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "300",
    position: "absolute",
    left: 71,
  },
  txtFollowers: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "300",
    position: "absolute",
    left: 0,
  },
  txtFollowing: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "300",
    position: "absolute",
    left: 88,
  },
  followersValue: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "bold",
    position: "absolute",
    left: 56,
  },
  followingValue: {
    ...theme.textLight,
    color: theme.colors.white,
    fontWeight: "bold",
    position: "absolute",
    left: 143,
  },
});
