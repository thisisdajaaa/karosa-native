import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import { BaseText } from "@app/components/base-text";
import { Separator } from "@app/components/separator";
import { SubmitButton } from "@app/components/formik/submit-button";
import { FormCheckbox } from "@app/components/formik/form-checkbox";
import { BottomSheet } from "@app/components/bottom-sheet";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { AvailabilityForm } from "@app/redux/shop/models";

import { Props } from "./types";
import { styles } from "./styles";

const AvailabilityModal: React.FC<Props> = ({ sheetRef }) => {
  const dispatch = useDispatch();

  const setAvailabilityForm = useCallback(
    (values: AvailabilityForm) => dispatch(actions.setAvailabilityForm(values)),
    [dispatch]
  );

  const availabilityForm = useMemoizedSelector(selectors.getAvailabilityForm);

  const formikBag = useFormik({
    initialValues: availabilityForm,
    onSubmit: (values) => {
      setAvailabilityForm(values);
      sheetRef.current?.close();
    },
  });

  const checkbox = (label: string, name: string) => (
    <FormCheckbox label={label} name={name} />
  );

  const separator = <Separator containerStyle={styles.separator} />;

  const elementIterator = (items: React.ReactElement[]) => {
    return items.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const elements = (): React.ReactElement[] => {
    const items: React.ReactElement[] = [];

    const mon = checkbox("Monday", "monday");
    const tues = checkbox("Tuesday", "tuesday");
    const wed = checkbox("Wednesday", "wednesday");
    const thurs = checkbox("Thursday", "thursday");
    const fri = checkbox("Friday", "friday");
    const sat = checkbox("Saturday", "saturday");
    const sun = checkbox("Sunday", "sunday");

    items.push(
      mon,
      separator,
      tues,
      separator,
      wed,
      separator,
      thurs,
      separator,
      fri,
      separator,
      sat,
      separator,
      sun,
      separator
    );

    return elementIterator(items);
  };

  const doneButtonProps: SubmitButtonProps = {
    title: "Done",
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet height={527} ref={sheetRef}>
        <BaseText style={styles.txtProductStatus}>Available every</BaseText>
        <View style={styles.spacer} />
        <React.Fragment>{elements()}</React.Fragment>

        <View style={styles.buttonContainer}>
          <SubmitButton {...doneButtonProps} />
        </View>
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default AvailabilityModal;
