/**
 *
 * @format
 *
 */

import { ENUM } from "@app/constants";
import { theme } from "@app/styles";

export const statusInformation = (status: ENUM.Shop_Status) => {
  let statusValue = "";
  let statusColor = "";

  switch (status) {
    case ENUM.Shop_Status.Active:
      statusValue = "Active";
      statusColor = theme.colors.primary;
      break;
    case ENUM.Shop_Status.OnVacation:
      statusValue = "On Vacation";
      statusColor = theme.colors.orange5;
      break;
    case ENUM.Shop_Status.Harvesting:
      statusValue = "Harvesting Season";
      statusColor = theme.colors.gold5;
      break;
    case ENUM.Shop_Status.Planting:
      statusValue = "Planting Season";
      statusColor = theme.colors.blue10;
      break;
    default:
      statusValue = "Active";
      break;
  }

  return {
    statusValue,
    statusColor,
  };
};
