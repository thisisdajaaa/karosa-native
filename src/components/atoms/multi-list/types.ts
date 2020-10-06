import { Props as ListChevron } from "../list/list-chevron/types";

type Separator = {
  hasSeparator?: boolean;
};

type IntersectedItem = ListChevron & Separator;

export type Props = {
  listItem: IntersectedItem[];
  hasChevron?: boolean;
};
