import React, { useState, useCallback } from "react";
import { Header } from "react-native-elements";
import { View } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ListInput } from "@app/components/list/list-input";
import { ListIterator } from "@app/components/list/list-iterator";
import { ListWarning } from "@app/components/list/list-warning";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { WholesaleForm } from "@app/redux/shop/models";

import { validationSchema } from "./validation";
import { styles } from "./styles";

const AddWholesaleScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { goBack } = useNavigation();

  const [displayWarning, setDisplayWarning] = useState(true);

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        containerStyle={{ backgroundColor: "transparent" }}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "Add Wholesale",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
      />
    ),
    customStyles: styles.container,
  };

  const setWholesaleForm = useCallback(
    (values: WholesaleForm) => dispatch(actions.setWholesaleForm(values)),
    [dispatch]
  );

  const wholesaleForm = useMemoizedSelector(selectors.getWholesaleForm);

  const formikBag = useFormik({
    initialValues: wholesaleForm,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      setWholesaleForm(values);
      goBack();
    },
  });

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    required: boolean
  ): JSX.Element => {
    return (
      <ListInput
        isRow
        hasBottomDivider
        required={required}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const min = listInput("min", "Minimum Order", "Set", false);
    const max = listInput("max", "Maximum Order", "Set", false);
    const unit = listInput("unit", "Unit Price", "Set Price/Grams", true);

    elements.push(min, max, unit);

    return ListIterator(elements);
  };

  const saveButtonProps: SubmitButtonProps = {
    title: "Save",
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...screenProps}>
        {displayWarning && (
          <ListWarning
            message={
              "Wholesale price will be hidden when the product is under promotion."
            }
            onPress={() => setDisplayWarning(false)}
          />
        )}

        <React.Fragment>{listDisplay()}</React.Fragment>

        <View style={styles.buttonContainer}>
          <SubmitButton {...saveButtonProps} />
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};

export default AddWholesaleScreen;
