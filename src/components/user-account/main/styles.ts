import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  actionPhaseContainer: {
    height: 160,
    backgroundColor: "white",
    marginVertical: 15,
  },
  headerContainer: {
    backgroundColor: "white",
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
    backgroundColor: "white",
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
    borderLeftColor: "#ECECEC",
    borderStyle: "solid",
    width: 50,
    flex: 1,
    padding: 11,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
  },
  txtInfo: {
    fontWeight: "300",
    textAlign: "center",
    lineHeight: 16,
    fontSize: 15,
    marginLeft: 6,
  },
  txtAmt: {
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 16,
    fontSize: 15,
    marginLeft: 6,
  },
  mainContainer: { backgroundColor: "#F5F5F5", flex: 1 },
  settingsIcon: { position: "absolute", right: 54, top: 7 },
  messageIcon: { position: "absolute", right: 17, top: 7 },
  peopleIcon: { position: "absolute", top: 6.8, left: 26 },
  coinsIcon: { position: "absolute", top: 6.8, left: 11 },
});
