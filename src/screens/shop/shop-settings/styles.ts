import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({

  itemContainer: {
    flexDirection: "row",
   
  },
  setDetailStyle: {
    flexDirection: "column-reverse",
    color: "#0AA351",
    fontSize: 16,
  },
  actionContainer: {
    paddingTop: 12,
    paddingRight: 50,
  },
  separator: {
    marginTop: 12,
  },
  actionPhaseContainer: {
    height: 160,
    backgroundColor: theme.colors.white,
    marginBottom: 15,
  },
  txtLogo: {
    position: "absolute",
    left: 34,
  },
  headerContainer: {
    backgroundColor: theme.colors.white,
    height: 158,
    justifyContent: "flex-end",
  },
  choicesContainer: {
    height: 180,
    backgroundColor: theme.colors.white,
  },
  sellerContainer: {
    marginLeft: 33,
    marginBottom: 7,
    backgroundColor: "transparent",
  },
  txtSeller: {
    color: theme.colors.white,
  },
  txtLabel: { ...theme.textRegular, fontWeight: "400" },
  txtSales: {
    ...theme.title,
    fontWeight: "500",
  },
  commonIcon: {
    fontSize: 72,
    marginTop: 6,
    color: theme.colors.dark5,
  },
  inboxIcon: {
    fontSize: 60,
    marginTop: 8,
    color: theme.colors.dark5,
  },
  profileIcon: {
    fontSize: 24,
    color: theme.colors.white,
  },
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
  multiListContainer: { height: 266, marginVertical: 18 },
  mainContainer: { backgroundColor: theme.colors.light5, flex: 1 },
});

export const itemStyle = (bgColor: string) => {
  return StyleSheet.create({
    circle: {
      borderRadius: 50,
      backgroundColor: bgColor,
      height: 16,
      width: 16,
      marginTop: 2,
      marginRight: 12,
    },
  });
};