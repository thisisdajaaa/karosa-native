/**
 *
 * @format
 *
 */

import { Category } from "@app/redux/api-models/category-list";

export const COLS = 3;
export const ICON_SIZE = 65;

export const categoryIcons = [
  "categoryFruits",
  "categoryVegetables",
  "categoryCoffee",
  "categoryRoots",
  "categoryMeats",
  "categoryHerbs",
  "categoryGrains",
  "categorySeeds",
  "categorySyrups",
  "categoryPlants",
  "categoryDairy",
  "categoryFeeds",
];

export const transformCategories = (categoryList: Category[]) => {
  const sortedCategories = [...categoryList].sort((a, b) => a.id - b.id);

  return sortedCategories.map((category, index) => {
    return {
      id: category.id,
      iconName: categoryIcons[index],
      name: category.name,
    };
  });
};
