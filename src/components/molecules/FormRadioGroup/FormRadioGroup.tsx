/**
 *
 * FormRadioGroup
 * @format
 *
 */

import React, { FC, Fragment, useState, useCallback } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { useField } from "formik";
import { useUpdateEffect } from "@app/hooks";
import Radio from "@app/atoms/Radio";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import FormRadioGroupStyles from "./styles";

const FormRadioGroup: FC<PropsType> = (props) => {
  const { name, options } = props;
  const [, meta, helpers] = useField(name);

  const [check, setCheck] = useState({
    value: meta.value || meta.initialValue,
  });

  useUpdateEffect(() => {
    setCheck({
      value: meta.value,
    });
  }, [meta.value]);

  const handlePress = useCallback(
    (val) => () => {
      setCheck({ value: val });

      helpers.setValue(val);

      helpers.setTouched(true);
    },
    [helpers]
  );

  return (
    <Fragment>
      {options.map((option, index) => (
        <Fragment key={index}>
          <ListItem style={FormRadioGroupStyles.container} bottomDivider>
            <View style={FormRadioGroupStyles.radioContainer}>
              <Radio
                checked={check.value === option.id}
                title={option.label}
                onPress={handlePress(option.id)}
              />

              {option.info && (
                <View style={FormRadioGroupStyles.infoContainer}>
                  <Text
                    text={option.info}
                    textStyle={FormRadioGroupStyles.txtInfo}
                  />
                </View>
              )}
            </View>
          </ListItem>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default FormRadioGroup;
