import { Props as ListChevron } from "../list/list-chevron/types";
import { Props as ListDisplay } from "../list/list-display/types";
import { Props as ListAction } from "../list/list-action/types";

type Separator = {
  hasSeparator?: boolean;
};

type MultiChevron = ListChevron & Separator;
type MultiDisplay = ListDisplay & Separator;
type MultiAction = ListAction & Separator;

export type Props = {
  multiChev?: MultiChevron[];
  multiDisp?: MultiDisplay[];
  multiAction?: MultiAction[];
};
