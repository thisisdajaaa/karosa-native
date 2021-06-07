/**
 *
 * @format
 *
 */

import { PropsType as ListChevron } from "@app/organisms/ListChevron/types";
// import { Props as ListDisplay } from "../list/list-display/types";
import { Props as ListDisplay } from "@app/organisms/ListDisplay/types";
// import { Props as ListAction } from "../list/list-action/types";
import { Props as ListAction } from "@app/organisms/ListAction/types";

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
