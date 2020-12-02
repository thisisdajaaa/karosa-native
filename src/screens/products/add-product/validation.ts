import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  productImg: Yup.mixed().required().label("Product Image"),
  price: Yup.string().required().label("Price"),
  stocks: Yup.string().required().label("Stocks"),
  productNm: Yup.string().required().label("Product Name"),
  weight: Yup.string().required().label("Weight"),
  description: Yup.string().required().label("Description"),
  shelfLife: Yup.string().required().label("Shelf Life"),
});
