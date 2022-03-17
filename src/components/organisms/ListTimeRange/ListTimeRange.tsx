/**
 *
 * ListTimeRange
 * @format
 *
 */

import React, { FC } from "react";
import { ListItem } from "react-native-elements";
import { useFieldError } from "@app/hooks";
import Text from "@app/atoms/Text";
import ValidationMessage from "@app/molecules/ValidationMessage";
import FormTimeRange from "@app/molecules/FormTimeRange";

import type { PropsType } from "./types";
import ListTimeRangeStyles from "./styles";

const ListTimeRange: FC<PropsType> = (props) => {
  const { label, startName, endName, hasBottomDivider } = props;

  const { isError: endError } = useFieldError(endName);

  return (
    <ListItem bottomDivider={hasBottomDivider}>
      <ListItem.Content style={ListTimeRangeStyles.column}>
        <ListItem.Content style={ListTimeRangeStyles.container}>
          <Text text={label} textStyle={ListTimeRangeStyles.txtLabel} />

          <ListItem.Content>
            <FormTimeRange
              startName={startName}
              endName={endName}
              style={ListTimeRangeStyles.timeRange}
            />
          </ListItem.Content>
        </ListItem.Content>

        {endError && <ValidationMessage name={endName} />}
      </ListItem.Content>
    </ListItem>
  );
};

export default ListTimeRange;
