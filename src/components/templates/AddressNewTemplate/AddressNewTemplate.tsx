/**
 *
 * AddressNewTemplate
 * @format
 *
 */

 import React, { FC, useEffect, useState } from "react";

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
