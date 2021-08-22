/**
 *
 * @format
 *
 */

<<<<<<< HEAD
 import { theme } from "@app/styles";
 import { StyleSheet } from "react-native";
 
 const ImageOverlayStyles = StyleSheet.create({
   mainContainer: {
     flex: 1,
   },
   textViewStyle: {
     position: "absolute",
     justifyContent: "center",
     alignItems: "center",
     opacity: 0.8,
   },
   textStyle: {
     color: theme.colors.white,
   },
 });
 
 export default ImageOverlayStyles;
=======
import { StyleSheet } from "react-native";

const ImageOverlayStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  textViewStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
  textStyle: {
    color: "white",
  },
});

export default ImageOverlayStyles;
>>>>>>> e918c9f... fix(fix layout issues in variation): fix layout issues in variation
