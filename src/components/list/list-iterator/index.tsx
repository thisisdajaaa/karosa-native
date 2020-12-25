import React from "react";

export const ListIterator = (listItems: React.ReactElement[]) => {
  return listItems.map((item, key) => (
    <React.Fragment key={key}>{item}</React.Fragment>
  ));
};
