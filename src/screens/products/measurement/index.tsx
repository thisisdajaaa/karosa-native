import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { FormikContext, useFormik } from "formik";
import RBSheet from "react-native-raw-bottom-sheet";
import { BaseText } from "@app/components/base-text";
import { SubmitButton } from "@app/components/formik/submit-button";
import { Props as SubmitButtonProps } from "@app/components/formik/submit-button/types";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/shop";
import { FormRadioGroup } from "@app/components/formik/form-radio-group";

import { Props } from "./types";
import { styles } from "./styles";

const MeasurementModal: React.FC<Props> = ({ sheetRef }) => {
  const dispatch = useDispatch();

  const setProductMeasurement = useCallback(
    (value: string) => dispatch(actions.setProductMeasurement(value)),
    [dispatch]
  );

  const productMeasurement = useMemoizedSelector(
    selectors.getProductMeasurement
  );

  const formikBag = useFormik({
    initialValues: { measurement: productMeasurement },
    onSubmit: (values) => {
      setProductMeasurement(values.measurement);
      sheetRef.current?.close();
    },
  });

  const radioOptions = [
    {
      id: "1",
      label: "Grams",
    },
    {
      id: "2",
      label: "Kilograms",
    },
    {
      id: "3",
      label: "Piece",
    },
  ];

  const doneButtonProps: SubmitButtonProps = {
    title: "Done",
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <RBSheet
        ref={sheetRef}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={328}
        customStyles={{
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 5,
          },
        }}
      >
        <BaseText style={styles.txtProductStatus}>Unit of Measurement</BaseText>
        <View style={styles.spacer} />

        <FormRadioGroup
          name={"measurement"}
          options={radioOptions}
          hasSeparator
        />

        <View style={styles.buttonContainer}>
          <SubmitButton {...doneButtonProps} />
        </View>
      </RBSheet>
    </FormikContext.Provider>
  );
};

export default MeasurementModal;
