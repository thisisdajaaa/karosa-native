/**
 *
 * @format
 *
 */

import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

const UserAccountMainStyles = StyleSheet.create({
  actionPhaseContainer: {
    height: 160,
    backgroundColor: theme.colors.white,
    marginVertical: 15,
  },
  headerContainer: {
    backgroundColor: theme.colors.white,
    minHeight: 180,
    justifyContent: "flex-end",
  },
  infoContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  choicesContainer: {
    height: 180,
    backgroundColor: theme.colors.white,
  },
  myShopButtonContainer: {
    width: 91,
    height: 31,
  },
  firstInfoContainer: {
    width: 50,
    flex: 1,
    padding: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  secondInfoContainer: {
    borderLeftWidth: 1,
    borderLeftColor: theme.colors.light10,
    borderStyle: "solid",
    width: 50,
    flex: 1,
    padding: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  buyerContainer: {
    marginLeft: 33,
    marginBottom: 7,
  },
  txtMyShopButton: {
    ...theme.textLightBold,
    position: "relative",
    top: -1,
    left: -6,
  },
  txtInfo: {
    ...theme.textLight,
    fontWeight: "300",
    textAlign: "center",
    marginLeft: 6,
  },
  txtMyPurchases: {
    ...theme.textTitle,
    fontWeight: "500",
  },
  txtAmt: {
    ...theme.textLight,
    fontWeight: "700",
    textAlign: "center",
    marginLeft: 6,
  },
  cardIcon: {
    fontSize: 80,
    fontWeight: "100",
    alignSelf: "center",
    position: "absolute",
    top: 9,
    color: theme.colors.dark5,
  },
  shipIcon: {
    fontSize: 72,
    marginTop: 6,
    color: theme.colors.dark5,
  },
  receiveIcon: {
    fontSize: 60,
    marginTop: 8,
    color: theme.colors.dark5,
  },
  rateIcon: {
    fontSize: 60,
    marginTop: 9,
    color: theme.colors.dark5,
  },
  myShopIcon: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.white,
    position: "absolute",
    right: 6,
  },
  commonIconHeader: {
    fontSize: 24,
    color: theme.colors.primary,
    marginRight: 12,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 36,
  },
  peopleIcon: {
    position: "absolute",
    top: 6.8,
    left: 26,
    fontSize: 24,
    color: theme.colors.primary,
  },
  coinsIcon: {
    position: "absolute",
    top: 6.8,
    left: 11,
    fontSize: 21,
    color: theme.colors.primary,
  },
  mainContainer: { backgroundColor: theme.colors.light5, flex: 1 },
});

export default UserAccountMainStyles;
