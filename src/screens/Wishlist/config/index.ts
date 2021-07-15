/**
 *
 * @format
 *
 */

import { WishlistProd } from "@app/redux/api-models/wishlist";
export const mockProducts: WishlistProd[] = [
  {
    id: 1,
    name: "Banana",
    categoryId: 1,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "500",
    dsctdPrice: "300",
    rating: 5,
    createdAt: "",
    updatedAt: "",
    discount: 30,
    stocks: 50,
  },
  {
    id: 2,
    name: "Apple",
    categoryId: 1,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "400",
    dsctdPrice: "200",
    rating: 4,
    createdAt: "",
    updatedAt: "",
    discount: 50,
    stocks: 0,
  },
  {
    id: 3,
    name: "Mango",
    categoryId: 1,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "100",
    dsctdPrice: "50",
    rating: 4,
    createdAt: "",
    updatedAt: "",
    discount: 20,
    stocks: 0,
  },
  {
    id: 4,
    name: "Okra",
    categoryId: 2,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "200",
    dsctdPrice: "150",
    rating: 3,
    createdAt: "",
    updatedAt: "",
    discount: 10,
    stocks: 0,
  },
  {
    id: 5,
    name: "Kape Barako",
    categoryId: 3,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "200",
    dsctdPrice: "150",
    rating: 3,
    createdAt: "",
    updatedAt: "",
    discount: 10,
    stocks: 0,
  },
  {
    id: 6,
    name: "Pears",
    categoryId: 4,
    description: "mock description",
    shopId: 2,
    orgnlPrice: "200",
    dsctdPrice: "150",
    rating: 3,
    createdAt: "",
    updatedAt: "",
    discount: 10,
    stocks: 1,
  },
];

export const textElipsis = (limit: number, word: string) => {
  let wordholder = "";

  if (word.length <= limit) {
    wordholder = word;
  } else {
    for (let i = 0; i < limit; i++) {
      if (i <= limit - 3) {
        wordholder = wordholder + word.charAt(i);
      } else {
        wordholder = wordholder + ".";
      }
    }
  }

  return wordholder.toString();
};
