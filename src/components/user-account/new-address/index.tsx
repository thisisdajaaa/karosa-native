import React, { useState } from "react";

import { AppButton } from "../../atoms/button";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";
import { Props as MultiListProps } from "../../atoms/multi-list/types";
import { View, CheckBox } from "react-native";
import { MultiList } from "../../atoms/multi-list";

import { newAddressStyle } from "./styles";
import { BaseText } from "../../atoms/base-text";

const NewAddress: React.FC = () => {
  const { goBack } = useNavigation();
  const [isSelected, setSelection] = useState(false);

  const logoutButtonProps: ButtonProps = {
    onPress: () => console.log("Submit"),
    title: "Submit",
    containerStyle: {
      backgroundColor: "#0AA351",
      alignSelf: "center",
    },
    textStyle: {
      color: "white",
    },
  };
  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "New Address",
      press: {
        left: () => goBack(),
      },
    },
  };

  const newAddressList: MultiListProps = {
    multiAction: [
      {
        text: {
          left: "Full Name",
          right: "Set Full Name",
        },
        action: () => console.log("set full name"),
        style: {
          textStyle: {
            right: {
              color: "#BDBDBD",
              fontSize: 16,
            },
            left: {
              color: "#1C1C1C",
              position: "absolute",
              left: 5,
              fontSize: 16,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Phone Number",
          right: "Set Phone Number",
        },
        action: () => console.log("set phone number"),
        style: {
          textStyle: {
            right: {
              color: "#BDBDBD",
              fontSize: 16,
            },
            left: {
              color: "#1C1C1C",
              position: "absolute",
              left: 5,
              fontSize: 16,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Region",
          right: "Choose Region",
        },
        action: () => console.log("choose region"),
        style: {
          textStyle: {
            right: {
              color: "#BDBDBD",
              fontSize: 16,
            },
            left: {
              color: "#1C1C1C",
              position: "absolute",
              left: 5,
              fontSize: 16,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Province",
          right: "Choose Province",
        },
        action: () => console.log("choose province"),
        style: {
          textStyle: {
            right: {
              color: "#BDBDBD",
              fontSize: 16,
            },
            left: {
              color: "#1C1C1C",
              position: "absolute",
              left: 5,
              fontSize: 16,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Barangay",
          right: "Choose Barangay",
        },
        action: () => console.log("Choose Barangay"),
        style: {
          textStyle: {
            right: {
              color: "#BDBDBD",
              fontSize: 16,
            },
            left: {
              color: "#1C1C1C",
              position: "absolute",
              left: 5,
              fontSize: 16,
            },
          },
        },
        hasSeparator: true,
      },
      {
        text: {
          left: "Detailed Address",
          right: "Unit Number, House Number, Building,Street Name",
        },
        style: {
          containerStyle: {
            paddingBottom: 40,
          },
          textStyle: {
            right: {
              color: "#BDBDBD",
              position: "absolute",
              paddingTop: 55,
              paddingLeft: 20,
              fontSize: 14,
              textAlign: "left",
              justifyContent: "flex-end",
              paddingRight: 70,
            },
            left: {
              flexWrap: "wrap",
              color: "#1C1C1C",
              left: 20,
              marginLeft: 4,
            },
          },
        },
      },
      {
        text: {
          left: "",
          right: "Set Detailed Address",
        },
        action: () => console.log("set detailed address"),
        style: {
          containerStyle: {
            height: 25,
          },
          textStyle: {
            right: {
              color: "#0AA351",
              fontSize: 16,
              paddingBottom: 15,
            },
          },
        },
        hasSeparator: true,
      },
    ],
  };

  return (
    <Screen {...headerProps}>
      <View style={{ marginTop: 16 }}>
        <MultiList {...newAddressList} />
        <View style={newAddressStyle.newContainer}>
          <BaseText style={newAddressStyle.TextStyle}>
            Set as default address
          </BaseText>
          <View style={newAddressStyle.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={newAddressStyle.checkbox}
            />
          </View>
          <View style={newAddressStyle.ButtonParent}>
            <AppButton {...logoutButtonProps} />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default NewAddress;
