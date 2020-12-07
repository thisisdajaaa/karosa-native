import React, { useMemo } from "react";
import { ListItem } from "react-native-elements";
import { useFormikContext } from "formik";
import { BaseText } from "@app/components/base-text";
import { FormInput } from "@app/components/formik/form-input";
import { theme } from "@app/styles";

import { Props } from "./types";
import { styles } from "./styles";

export const ListInput: React.FC<Props> = React.memo(
  ({
    isColumn,
    isRow,
    label,
    placeholder,
    required,
    name,
    maxLength,
    hasBottomDivider,
  }) => {
    const { values } = useFormikContext<any>();

    const currentLength = useMemo(() => {
      return values[name].length;
    }, [name, values]);

    return (
      <ListItem bottomDivider={hasBottomDivider}>
        {isColumn && (
          <ListItem.Content style={styles.columnContainer}>
            <ListItem.Content style={styles.columnLabelContainer}>
              <BaseText style={styles.txtLabel}>{label}</BaseText>
              <BaseText style={styles.totalDigits}>
                ({currentLength}/{maxLength})
              </BaseText>
              {required && <BaseText style={styles.required}>*</BaseText>}
            </ListItem.Content>
            <ListItem.Content style={styles.columnInputContainer}>
              <FormInput
                name={name}
                placeholder={placeholder}
                numberOfLines={10}
                customStyles={styles.inputStyle}
              />
            </ListItem.Content>
          </ListItem.Content>
        )}

        {isRow && (
          <React.Fragment>
            <ListItem.Content style={styles.rowContainer}>
              <BaseText style={styles.txtLabel}>{label}</BaseText>
              {required && <BaseText style={styles.required}>*</BaseText>}
            </ListItem.Content>
            <ListItem.Content style={styles.rowInputContainer}>
              <FormInput
                name={name}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.primary}
                numberOfLines={1}
                style={styles.rowInput}
                customStyles={styles.inputStyle}
              />
            </ListItem.Content>
          </React.Fragment>
        )}
      </ListItem>
    );
  }
);

ListInput.displayName = "ListInput";
