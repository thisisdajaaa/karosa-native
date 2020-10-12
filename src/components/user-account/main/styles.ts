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
    borderTopWidth: 1,
    borderStyle: "solid",
    borderTopColor: "#ECECEC",
    flexDirection: "row",
    justifyContent: "center",
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
  mainContainer: { backgroundColor: "#E5E5E5", flex: 1 },
  settingsIcon: { position: "absolute", right: 64, top: 15 },
  messageIcon: { position: "absolute", right: 24, top: 15 },

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
});
