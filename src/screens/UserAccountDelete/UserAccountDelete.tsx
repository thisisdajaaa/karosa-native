/**
 *
 * UserAccountDelete
 * @format
 *
 */

import React, { FC } from "react";
import BottomSheet from "@app/molecules/BottomSheet";
import UserAccountDeleteTemplate from "@app/templates/UserAccountDelete";

import type { PropsType } from "./types";
import { BTM_SHEET_HEIGHT } from "./config";
import { FormikContext, useFormik } from "formik";

const UserAccountDeleteScreen: FC<PropsType> = (props) => {
  const { sheetRef } = props;

  const handleSubmit = () => {
    return;
  };

  const formikBag = useFormik({
    initialValues: {
      firstReason: false,
      secondReason: false,
      thirdReason: false,
      fourthReason: false,
    },
    onSubmit: handleSubmit,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <BottomSheet ref={sheetRef} height={BTM_SHEET_HEIGHT}>
        <UserAccountDeleteTemplate sheetRef={sheetRef} />
      </BottomSheet>
    </FormikContext.Provider>
  );
};

export default UserAccountDeleteScreen;
