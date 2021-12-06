/**
 *
 * ListDatepicker
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { theme } from "@app/styles";
import { useFieldError } from "@app/hooks";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormDatepicker from "@app/molecules/FormDatepicker";

import type { PropsType } from "./types";
import ListDatepickerStyles from "./styles";

const ListDatepicker: FC<PropsType> = (props) => {
  const { label, name, required, hasBottomDivider, icon } = props;

  const { isError } = useFieldError(name);

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListDatepickerStyles.column}>
        <ListItem.Content style={ListDatepickerStyles.container}>
          {icon ? (
            <>
              <Icon
                group={icon.group}
                name={icon.name}
                height={icon.height}
                width={icon.width}
                extraStyle={ListDatepickerStyles.icon}
              />
              <Text text={label} textStyle={ListDatepickerStyles.txtWithIcon} />
            </>
          ) : (
            <Text text={label} textStyle={ListDatepickerStyles.txtLabel} />
          )}

          {required && (
            <Text text="*" textStyle={ListDatepickerStyles.txtRequired} />
          )}

          <ListItem.Content>
            <FormDatepicker
              name={name}
              placeholderColor={theme.colors.primary}
              style={ListDatepickerStyles.datepicker}
            />
          </ListItem.Content>
        </ListItem.Content>

        {isError && <ValidationMessage name={name} />}
      </ListItem.Content>
    </ListItem>
  );
};

export default ListDatepicker;
