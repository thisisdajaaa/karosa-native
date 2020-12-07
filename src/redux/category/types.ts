export const ACT_CATEGORY_LIST_REQUEST = "shop/actCategoryListRequest" as const;
export const ACT_CATEGORY_LIST_SUCCESS = "shop/actCategoryListSuccess" as const;
export const ACT_CATEGORY_LIST_FAILURE = "shop/actCategoryListFailure" as const;

export type Types =
  | typeof ACT_CATEGORY_LIST_REQUEST
  | typeof ACT_CATEGORY_LIST_SUCCESS
  | typeof ACT_CATEGORY_LIST_FAILURE;
