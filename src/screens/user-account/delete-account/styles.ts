import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = (hasFormikVal: boolean) => {
  return StyleSheet.create({
    btnDeleteContainer: {
      backgroundColor: theme.colors.light10,
      minWidth: 330,
      width: "100%",
    },
    btnCancelContainer: {
      marginTop: 12,
      backgroundColor: theme.colors.light10,
      minWidth: 330,
      width: "100%",
    },
    checkBoxContainer: {
      alignSelf: "flex-start",
      marginTop: 5,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 17,
    },
    txtBtnDelete: {
      color: hasFormikVal ? theme.colors.dark20 : theme.colors.dark10,
    },
    txtBtnCancel: {
      color: theme.colors.dark20,
    },
    txtDeleteAcc: {
      ...theme.textBold,
      marginVertical: 12,
      textAlign: "center",
      fontWeight: "500",
    },
    txtDeleteAccPar: {
      ...theme.textRegular,
      paddingHorizontal: 4,
      textAlign: "center",
      color: theme.colors.dark30,
      fontWeight: "400",
    },
  });
};
