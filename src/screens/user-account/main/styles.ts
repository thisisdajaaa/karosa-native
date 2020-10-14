import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  actionPhaseContainer: {
    height: 160,
    backgroundColor: theme.colors.white,
    marginVertical: 15,
  },
  headerContainer: {
    backgroundColor: theme.colors.white,
    height: 200,
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
    backgroundColor: theme.colors.primary,
    height: 10,
    width: 88,
    marginTop: 6,
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
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: 10,
  },
  txtInfo: {
    ...theme.textLight,
    fontWeight: "300",
    textAlign: "center",
    marginLeft: 6,
  },
  txtMyPurchases: {
    ...theme.title,
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
    color: theme.colors.white,
  },
  commonIconHeader: {
    fontSize: 24,
    color: theme.colors.primary,
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
  settingsIconContainer: { position: "absolute", right: 54, top: 7 },
  messageIconContainer: { position: "absolute", right: 17, top: 7 },
});