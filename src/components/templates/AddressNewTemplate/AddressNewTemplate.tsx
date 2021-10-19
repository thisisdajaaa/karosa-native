/**
 *
 * AddressNewTemplate
 * @format
 *
 */

 import React, { FC, useEffect, useState } from "react";

<<<<<<< HEAD
 import type { PropsType } from "./types";
 import { useNavigation } from "@react-navigation/native";
 import { Keyboard, ScrollView, View } from "react-native";
 import Header from "@app/components/molecules/Header";
 
 import Text from "@app/atoms/Text";
 import { ListItem } from "react-native-elements";
 import Icon from "@app/atoms/Icon";
 import ListInput from "@app/components/organisms/ListInput";
 import Button from "@app/atoms/Button";
 import { useFormikContext } from "formik";
 import { NewAddressForm } from "@app/redux/address/models";
 import AddressNewTemplateStyles from "./styles";
 import { TouchableWithoutFeedback } from "react-native-gesture-handler";
 
 const AddressNewTemplate: FC<PropsType> = (props) => {
   const { details, inputProps } = props;
   const { goBack } = useNavigation();
   const { submitForm } = useFormikContext<NewAddressForm>();
 
   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
 
   useEffect(() => {
     const keyboardDidShowListener = Keyboard.addListener(
       "keyboardDidShow",
       () => {
         setKeyboardVisible(true); // or some other action
       }
     );
     const keyboardDidHideListener = Keyboard.addListener(
       "keyboardDidHide",
       () => {
         setKeyboardVisible(false); // or some other action
       }
     );
 
     return () => {
       keyboardDidHideListener.remove();
       keyboardDidShowListener.remove();
     };
   }, []);
 
   return (
     <View style={AddressNewTemplateStyles.viewFlex}>
       <Header
         barStyle="light-content"
         leftComponent={
           <TouchableWithoutFeedback onPress={goBack}>
             <Icon
               group="accountSettings"
               name={"arrow"}
               width={20}
               height={20}
             />
           </TouchableWithoutFeedback>
         }
         centerComponent={<Text text={"New Address"}></Text>}
         hasBottomDivider={true}
       />
       <View style={AddressNewTemplateStyles.subContainer}>
         <ListItem bottomDivider={true}>
           <ListItem.Content style={AddressNewTemplateStyles.listContainer}>
             <Icon
               group="accountSettings"
               name={"address_pointer"}
               width={20}
               height={20}
             />
             <Text text={details} />
           </ListItem.Content>
 
           <View style={AddressNewTemplateStyles.infoContainerWithoutChevron}>
             <Icon
               group="accountSettings"
               name={"edit"}
               width={20}
               height={20}
             />
           </View>
         </ListItem>
       </View>
 
       <View
         style={
           isKeyboardVisible
             ? AddressNewTemplateStyles.scrollviewAdjusted
             : AddressNewTemplateStyles.scrollviewContainer
         }>
         <ScrollView style={AddressNewTemplateStyles.viewFlex}>
           <View style={AddressNewTemplateStyles.subContainer}>
             {inputProps.map((props) => {
               return (
                 <View>
                   <ListInput
                     name={props.name}
                     label={props.label}
                     placeholder={props.placeholder}
                     hasBottomDivider
                     required
                     maxLen={props.maxLen}
                     numofLines={props.numofLines}
                     variation={props.variation}
                     keyboardType={
                       props.keyboardType ? props.keyboardType : "default"
                     }
                   />
                 </View>
               );
             })}
           </View>
         </ScrollView>
       </View>
       <View style={AddressNewTemplateStyles.footer}>
         <Button
           title={"Save address"}
           buttonStyle={AddressNewTemplateStyles.fullWidth}
           titleStyle={AddressNewTemplateStyles.bottomButtonStyle}
           onPress={submitForm}></Button>
       </View>
     </View>
   );
 };
 export default AddressNewTemplate;
=======
// import AddressNewTemplateConfig from "./config";
import type { PropsType } from "./types";
import MapView, { Callout, CalloutSubview, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Animated, Keyboard, TouchableOpacity, View } from "react-native";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";

import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AddressNewTemplateStyles from "./styles";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import Icon from "@app/atoms/Icon";

const AddressNewTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();

  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Header
        barStyle="light-content"
        placement={"left"}
        leftComponent={{
          icon: "arrow-back",
          color: "green",
          onPress: goBack,
          style: {
            paddingTop: 5,
          },
        }}
        containerStyle={{
          width: "100%",
          maxWidth: "100%",
          zIndex: 1,
          position: "absolute",
        }}
        centerComponent={<Text text={"New Address"}></Text>}
      />
    </View>
  );
};
export default AddressNewTemplate;
>>>>>>> c990fd8... feat(rebasing from dev): rebaseing
