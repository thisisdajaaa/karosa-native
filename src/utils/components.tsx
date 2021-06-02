import React, { Fragment } from "react";

export const listIterator = (listItems: React.ReactElement[]) => {
  return listItems.map((item, key) => <Fragment key={key}>{item}</Fragment>);
};
