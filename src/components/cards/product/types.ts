import { Products } from "@app/redux/api-models/product-list";

type Common = {
  item: Products;
};

export type BuyerProps = Common;

export type HomeProps = Common;

export type SellerProps = {
  item: Products;
  ActionButton?: React.ReactElement;
};
