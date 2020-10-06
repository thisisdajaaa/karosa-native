import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
  },
  paragContainer: { marginBottom: 30 },
  paragHeader: {
    marginBottom: 20,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 18.75,
  },
  paragBody: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
  },
  buttonContainer: { position: "absolute", bottom: 20, alignSelf: "center" },
});
