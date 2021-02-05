import React from "react";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { FormikContext, useFormik } from "formik";
import FormInput from "@app/molecules/FormInput";
import Text from "@app/atoms/Text";
import { styles } from "./styles";
import { ScrollView, View } from "react-native";
import { DIMENS, theme } from "@app/styles";
import { ListItem } from "react-native-elements";

const BasketScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Basket",
    },
    customStyles: styles.container,
  };

  const formikBag = useFormik({
    initialValues: { sample: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const currentLength = React.useMemo(() => {
    return formikBag.values.sample.length;
  }, [formikBag.values.sample]);

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        <ScrollView>
          <ListItem bottomDivider>
            <ListItem.Content
              style={{
                flexDirection: "column",
                height: 96,
              }}>
              <ListItem.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}>
                <Text
                  text={"Name"}
                  customStyle={{ ...theme.textRegular, fontWeight: "400" }}
                />
                <Text
                  text={`${currentLength}/100`}
                  customStyle={{
                    fontWeight: "400",
                    fontSize: 16,
                    lineHeight: 19,
                    color: theme.colors.dark10,
                    marginLeft: 2,
                  }}
                />
                <Text
                  text="*"
                  customStyle={{
                    ...theme.textRegular,
                    marginLeft: 2,
                    color: theme.colors.red5,
                    fontWeight: "400",
                  }}
                />
              </ListItem.Content>
              <ListItem.Content
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  marginTop: 25,
                }}>
                <FormInput
                  name={"sample"}
                  placeholder={"Set Sample"}
                  numberOfLines={10}
                  multiline
                  customStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 0,
                    padding: 0,
                  }}
                />
              </ListItem.Content>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      </Screen>
    </FormikContext.Provider>
  );
};

export default BasketScreen;
