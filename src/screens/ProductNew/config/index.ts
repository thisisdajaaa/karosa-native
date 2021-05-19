/**
 *
 * @format
 *
 */

import { ENUM } from "@app/constants";
import { theme } from "@app/styles";

export const statusInformation = (status: ENUM.Product_Status) => {
  let statusValue = "";
  let statusColor = "";

  switch (status) {
    case ENUM.Product_Status.Available:
      statusValue = "Available";
      statusColor = theme.colors.primary;
      break;
    case ENUM.Product_Status.Harvesting:
      statusValue = "Harvesting Season";
      statusColor = theme.colors.gold5;
      break;
    case ENUM.Product_Status.Planting:
      statusValue = "Planting Season";
      statusColor = theme.colors.dark5;
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
