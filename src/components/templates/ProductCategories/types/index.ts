/**
 *
 * @format
 *
 */

import { Category } from "@app/redux/api-models/category-list";

export type PropsType = {
  onBack(): void;
  onCategory(value: number, name: string): void;
  categoryList: Category[];
};
