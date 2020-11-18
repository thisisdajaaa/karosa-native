import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = (hasFormikVal: boolean) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.light5,
      flex: 1,
    },
    buttonContainer: {
      position: "absolute",
      alignSelf: "center",
      bottom: 17,
    },
    btnSaveContainer: {
      backgroundColor: hasFormikVal
        ? theme.colors.primary
        : theme.colors.light10,
      minWidth: 330,
      width: "100%",
    },
    txtBtnSave: {
      color: hasFormikVal ? theme.colors.white : theme.colors.dark10,
    },
  });
};
