import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  coverPhoto: {
    height: 140,
  },
  avatarContainer: {
    position: "absolute",
    top: 105,
    left: 24,
    zIndex: 1,
  },
  avatarPhoto: {
    width: 91,
    height: 91,
    borderRadius: 100,
    borderColor: theme.colors.white,
    borderWidth: 5,
  },
  profileInfoContainer: {
    height: 145,
    backgroundColor: theme.colors.white,
    zIndex: 0,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.light10,
  },
  chatIcon: {
    fontSize: 21,
    color: theme.colors.dark20,
    position: "absolute",
    left: 25,
  },
  txtChat: {
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: 50,
    color: theme.colors.dark20,
    fontWeight: "700",
  },
  btnChat: {
    position: "absolute",
    right: 145,
    width: 111,
    height: 32,
    borderRadius: 3,
    backgroundColor: theme.colors.light10,
  },
  personIcon: {
    fontSize: 18,
    color: theme.colors.white,
    position: "absolute",
    left: 20,
  },
  txtPerson: {
    ...theme.textLight,
    alignSelf: "center",
    position: "absolute",
    left: 45,
    fontWeight: "700",
  },
  btnPerson: {
    position: "absolute",
    right: 20,
    width: 111,
    height: 32,
    borderRadius: 3,
  },
  shopNameContainer: {
    position: "absolute",
    bottom: 70,
    left: 24,
  },
  txtShopName: {
    ...theme.textBold,
    fontWeight: "500",
  },
  shopAddrContainer: {
    position: "absolute",
    bottom: 50,
    left: 24,
    flexDirection: "row",
  },
  txtShopAddr: {
    ...theme.textRegular,
    fontWeight: "300",
  },
  activeContainer: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 3,
  },
  activeIcon: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginTop: 3,
    backgroundColor: theme.colors.green10,
  },
  inactiveIcon: {
    width: 8,
    height: 8,
    borderRadius: 100,
    marginTop: 3,
    backgroundColor: theme.colors.dark5,
  },
  txtIcon: {
    ...theme.textLight,
    marginLeft: 4,
    fontWeight: "700",
  },
  bottomInfoContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
    left: 24,
  },
  ratingContainer: {
    flexDirection: "column",
  },
  txtBottomValue: {
    ...theme.textLight,
    fontWeight: "700",
  },
  txtBottomLabel: {
    ...theme.textLight,
    fontWeight: "300",
  },
  followersPerfContainer: {
    flexDirection: "column",
    marginLeft: 35,
  },
});
