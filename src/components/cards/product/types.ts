import { Products } from "@app/redux/api-models/product-list";

type Theme = "seller" | "buyer";

export type SellerProps = {
  item: Products;
  ActionButton?: React.ReactElement;
};

export type BuyerProps = {
  item: Products;
  ActionButton?: React.ReactElement;
};
