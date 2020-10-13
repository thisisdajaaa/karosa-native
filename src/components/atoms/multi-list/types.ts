import { Props as ListItem } from "../list/types";

type Separator = {
  hasSeparator?: boolean;
};

type IntersectedItem = ListItem & Separator;

export type Props = {
  listItem: IntersectedItem[];
};
