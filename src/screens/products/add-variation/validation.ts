import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  variationImg: Yup.mixed().required().label("Variation Image"),
  price: Yup.string().required().label("Price"),
  productNm: Yup.string().required().label("Product Name"),
  weight: Yup.string().required().label("Weight"),
  stocks: Yup.string().required().label("Stocks"),
});
