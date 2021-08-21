/**
 *
 * @format
 *
 */

<<<<<<< HEAD
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
=======
import { theme } from "@app/styles";
>>>>>>> 07efcee... style(imageoverlay): updated styling of ImageOverlay
import { StyleSheet } from "react-native";

const ImageOverlayStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textViewStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.black,
    opacity: 0.8,
  },
  textStyle: {
    color: "white",
  },
});

export default ImageOverlayStyles;
>>>>>>> c416e9e... feat(added new variation in chevronlist and added new component imageoverlay): new Components
